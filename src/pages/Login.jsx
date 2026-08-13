import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../service/authService";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const data = await loginUser(
                username,
                password
            );

            // Save JWT
            localStorage.setItem(
                "token",
                data.token
            );

            // Save username
            localStorage.setItem(
                "username",
                data.username
            );

            console.log("Login successful");

            // Go to upload page
            navigate("/upload");

        } catch (error) {

            console.error(error);

            setError(
                error.message ||
                "Invalid username or password"
            );

        } finally {

            setLoading(false);

        }
    };


    return (

        <div className="auth-container">

            <h2>Welcome Back</h2>

            <p>
                Login to create your AI-powered quizzes.
            </p>


            <form onSubmit={handleLogin}>

                {/* Username */}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    required
                />


                {/* Password */}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />


                {/* Login */}

                <button
                    type="submit"
                    disabled={loading}
                >

                    {loading
                        ? "Logging in..."
                        : "Login"
                    }

                </button>

            </form>


            {/* Error */}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}


            {/* Register */}

            <p className="auth-footer">

                Don't have an account?{" "}

                <Link to="/register">
                    Register
                </Link>

            </p>

        </div>
    );
}

export default Login;