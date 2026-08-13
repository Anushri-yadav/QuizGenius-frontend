import { useState } from "react";
import { registerUser } from "../service/authService";

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        try {

            const result =
                await registerUser(username, password);

            setMessage(result);

            setUsername("");
            setPassword("");

        } catch (error) {

            setError(error.message);
        }
    };

    return (
        <div className="auth-container">

            <h2>Create Account</h2>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Register
                </button>

            </form>

            {message && (
                <p>{message}</p>
            )}

            {error && (
                <p>{error}</p>
            )}

        </div>
    );
}

export default Register;