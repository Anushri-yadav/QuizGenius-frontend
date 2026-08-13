import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz({ quiz, setScore }) {

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [showResult, setShowResult] = useState(false);

  const [showHint, setShowHint] = useState(false);

  const [points, setPoints] = useState(0);


  const questions = quiz.questions || [];

  const question = questions[currentQuestion];

  if (!question) {
    return (
      <div className="quiz-page">
        <h2>No questions found.</h2>
      </div>
    );
  }


  const selectAnswer = (index) => {

    if (showResult) {
      return;
    }

    setSelectedAnswer(index);

    setShowResult(true);

    if (index === question.correctAnswer) {

      setPoints((previous) => previous + 10);

    }
  };


  const nextQuestion = () => {

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(
        (previous) => previous + 1
      );

      setSelectedAnswer(null);

      setShowResult(false);

      setShowHint(false);

    } else {

      const finalScore =
        points +
        (
          selectedAnswer === question.correctAnswer
            ? 10
            : 0
        );

      setScore(finalScore);

      navigate("/result");

    }
  };


  const getOptionClass = (index) => {

    if (!showResult) {
      return "quiz-option";
    }

    if (index === question.correctAnswer) {
      return "quiz-option correct";
    }

    if (
      index === selectedAnswer &&
      index !== question.correctAnswer
    ) {
      return "quiz-option wrong";
    }

    return "quiz-option";
  };


  return (

    <div className="quiz-page">

      <div className="quiz-container">

        <div className="quiz-top">

          <button
            className="quit-button"
            onClick={() => navigate("/upload")}
          >
            ← Exit
          </button>

          <div className="quiz-title">
            {quiz.title || "QuizGenius"}
          </div>

          <div className="points">
            ⭐ {points}
          </div>

        </div>


        <div className="progress-section">

          <div className="progress-text">

            <span>
              Question {currentQuestion + 1}
              {" "}of{" "}
              {questions.length}
            </span>

            <span>
              {Math.round(
                (
                  (currentQuestion + 1) /
                  questions.length
                ) * 100
              )}%
            </span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${
                  (
                    (currentQuestion + 1) /
                    questions.length
                  ) * 100
                }%`
              }}
            />

          </div>

        </div>


        <div className="question-card">

          <span className="question-label">
            QUESTION {currentQuestion + 1}
          </span>

          <h1>
            {question.question}
          </h1>


          <div className="quiz-options">

            {question.options.map(
              (option, index) => (

                <button
                  key={index}
                  className={getOptionClass(index)}
                  onClick={() =>
                    selectAnswer(index)
                  }
                  disabled={showResult}
                >

                  <span className="option-letter">
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span>
                    {option}
                  </span>

                  {showResult &&
                    index ===
                      question.correctAnswer && (
                      <span className="answer-icon">
                        ✓
                      </span>
                    )}

                  {showResult &&
                    index === selectedAnswer &&
                    index !==
                      question.correctAnswer && (
                      <span className="answer-icon">
                        ✕
                      </span>
                    )}

                </button>

              )
            )}

          </div>


          <div className="hint-section">

            <button
              className="hint-button"
              onClick={() =>
                setShowHint(!showHint)
              }
            >
              💡 {showHint
                ? "Hide Hint"
                : "Show Hint"}
            </button>

            {showHint && (
              <div className="hint-box">
                💡 {question.hint}
              </div>
            )}

          </div>


          {showResult && (

            <div
              className={
                selectedAnswer ===
                question.correctAnswer
                  ? "feedback correct-feedback"
                  : "feedback wrong-feedback"
              }
            >

              {selectedAnswer ===
              question.correctAnswer ? (
                <>
                  <strong>
                    🎉 Correct!
                  </strong>

                  <span>
                    +10 points
                  </span>
                </>
              ) : (
                <>
                  <strong>
                    ❌ Incorrect
                  </strong>

                  <span>
                    Correct answer:{" "}
                    {
                      question.options[
                        question.correctAnswer
                      ]
                    }
                  </span>
                </>
              )}

            </div>

          )}


          {showResult && (

            <button
              className="next-button"
              onClick={nextQuestion}
            >
              {currentQuestion ===
              questions.length - 1
                ? "Finish Quiz"
                : "Next Question →"}
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default Quiz;