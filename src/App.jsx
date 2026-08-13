import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuizSettings from "./pages/QuizSettings";


function ProtectedRoute({ children }) {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}


function App() {

    const [quiz, setQuiz] = useState(null);
    const [score, setScore] = useState(0);

    return (
        <BrowserRouter>

            <Routes>

                {/* HOME */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* AUTH */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* PROTECTED UPLOAD */}

                <Route
                    path="/upload"
                    element={
                        <ProtectedRoute>
                            <Upload setQuiz={setQuiz} />
                        </ProtectedRoute>
                    }
                />


                {/* PROTECTED QUIZ SETTINGS */}

                <Route
                    path="/quiz-settings"
                    element={
                        <ProtectedRoute>
                            <QuizSettings />
                        </ProtectedRoute>
                    }
                />


                {/* PROTECTED QUIZ */}

                <Route
                    path="/quiz"
                    element={
                        <ProtectedRoute>
                            {quiz ? (
                                <Quiz
                                    quiz={quiz}
                                    setScore={setScore}
                                />
                            ) : (
                                <Navigate
                                    to="/upload"
                                    replace
                                />
                            )}
                        </ProtectedRoute>
                    }
                />


                {/* PROTECTED RESULT */}

                <Route
                    path="/result"
                    element={
                        <ProtectedRoute>
                            {quiz ? (
                                <Result
                                    quiz={quiz}
                                    score={score}
                                />
                            ) : (
                                <Navigate
                                    to="/upload"
                                    replace
                                />
                            )}
                        </ProtectedRoute>
                    }
                />


                {/* UNKNOWN URL */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;