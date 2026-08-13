import { Link } from "react-router-dom";

function Result({ quiz, score }) {

  const totalQuestions =
    quiz.questions?.length || 0;

  const maxScore =
    totalQuestions * 10;

  const percentage =
    maxScore === 0
      ? 0
      : Math.round(
          (score / maxScore) * 100
        );


  let message;

  if (percentage >= 80) {
    message = "Excellent work! 🎉";
  } else if (percentage >= 60) {
    message = "Good job! Keep practicing! 💪";
  } else {
    message = "Keep learning and try again! 📚";
  }


  return (

    <div className="result-page">

      <div className="result-card">

        <div className="result-icon">
          🏆
        </div>

        <h1>
          Quiz Complete!
        </h1>

        <p>
          {message}
        </p>


        <div className="final-score">

          <span>
            Your Score
          </span>

          <strong>
            {score}
          </strong>

          <small>
            out of {maxScore}
          </small>

        </div>


        <div className="percentage">
          {percentage}%
        </div>


        <div className="result-actions">

          <Link
            to="/upload"
            className="play-again"
          >
            Create Another Quiz
          </Link>

          <Link
            to="/"
            className="home-button"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Result;