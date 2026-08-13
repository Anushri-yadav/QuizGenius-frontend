import { Link, useNavigate } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

import {
    isLoggedIn,
    logoutUser
} from "../service/authService";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const loggedIn = isLoggedIn();


    const handleLogout = () => {

        logoutUser();

        setMenuOpen(false);

        navigate("/login");
    };


    return (
        <nav className="navbar">

            <div className="nav-container">


                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    className="logo"
                    onClick={() => setMenuOpen(false)}
                >

                    <div className="logo-icon">
                        <Brain size={24} />
                    </div>

                    <span>Quiz</span>

                    <span className="logo-ai">
                        50
                    </span>

                </Link>


                {/* ================= NAV LINKS ================= */}

                <div
                    className={`nav-links ${
                        menuOpen ? "active" : ""
                    }`}
                >

                    <a
                        href="#features"
                        onClick={() => setMenuOpen(false)}
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        onClick={() => setMenuOpen(false)}
                    >
                        How It Works
                    </a>

                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>


                    {/* ================= MOBILE AUTH ================= */}

                    <div className="mobile-auth">

                        {loggedIn ? (

                            <>
                                <Link
                                    to="/upload"
                                    className="login-btn"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Create Quiz
                                </Link>

                                <button
                                    className="signup-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>

                        ) : (

                            <>
                                <Link
                                    to="/login"
                                    className="login-btn"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="signup-btn"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Get Started
                                </Link>
                            </>

                        )}

                    </div>

                </div>


                {/* ================= DESKTOP AUTH ================= */}

                <div className="desktop-auth">

                    {loggedIn ? (

                        <>
                            <Link
                                to="/upload"
                                className="login-btn"
                            >
                                Create Quiz
                            </Link>

                            <button
                                className="signup-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <Link
                                to="/login"
                                className="login-btn"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="signup-btn"
                            >
                                Get Started
                            </Link>
                        </>

                    )}

                </div>


                {/* ================= MOBILE MENU ================= */}

                <button
                    className="menu-btn"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    aria-label="Toggle menu"
                >

                    {menuOpen
                        ? <X size={26} />
                        : <Menu size={26} />
                    }

                </button>

            </div>

        </nav>
    );
}


export default Navbar;
