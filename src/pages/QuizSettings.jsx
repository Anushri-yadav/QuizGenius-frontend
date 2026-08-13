
import { useState } from "react";
import {
  Brain,
  HelpCircle,
  Lightbulb,
  Clock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuizSettings() {

  const navigate = useNavigate();

  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState("Medium");
  const [hints, setHints] = useState(true);
  const [explanations, setExplanations] = useState(true);
  const [timeLimit, setTimeLimit] = useState(10);

  const startQuiz = () => {

    const settings = {
      questionCount,
      difficulty,
      hints,
      explanations,
      timeLimit,
    };

    console.log("Quiz Settings:", settings);

    // For now we move to the quiz page.
    // Later these settings will be sent to Spring Boot.
    navigate("/quiz");
  };

  return (
    <div className="settings-page">

      <div className="settings-container">

        {/* Header */}

        <div className="settings-header">

          <div className="settings-icon">
            <Brain size={30} />
          </div>

          <h1>Customize Your Quiz</h1>

          <p>
            Choose how you want QuizGenius to generate
            your quiz.
          </p>

        </div>


        {/* Settings Card */}

        <div className="settings-card">

          {/* Number of Questions */}

          <div className="setting-group">

            <div className="setting-title">

              <HelpCircle size={20} />

              <div>
                <h3>Number of Questions</h3>
                <p>
                  How many questions should your quiz contain?
                </p>
              </div>

            </div>

            <div className="question-options">

              {[5, 10, 15, 20].map((number) => (

                <button
                  key={number}
                  className={
                    questionCount === number
                      ? "question-count active"
                      : "question-count"
                  }
                  onClick={() => setQuestionCount(number)}
                >
                  {number}
                </button>

              ))}

            </div>

          </div>


          {/* Difficulty */}

          <div className="setting-group">

            <div className="setting-title">

              <Brain size={20} />

              <div>
                <h3>Difficulty</h3>
                <p>
                  Select the difficulty level.
                </p>
              </div>

            </div>

            <div className="difficulty-options">

              {["Easy", "Medium", "Hard"].map((level) => (

                <button
                  key={level}
                  className={
                    difficulty === level
                      ? "difficulty active"
                      : "difficulty"
                  }
                  onClick={() => setDifficulty(level)}
                >
                  {level}
                </button>

              ))}

            </div>

          </div>


          {/* Hints */}

          <div className="setting-row">

            <div className="setting-title">

              <Lightbulb size={20} />

              <div>
                <h3>Enable Hints</h3>
                <p>
                  Allow hints while solving questions.
                </p>
              </div>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={hints}
                onChange={() => setHints(!hints)}
              />

              <span className="slider"></span>

            </label>

          </div>


          {/* Explanations */}

          <div className="setting-row">

            <div className="setting-title">

              <Brain size={20} />

              <div>
                <h3>Answer Explanations</h3>
                <p>
                  Show explanations after answering.
                </p>
              </div>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={explanations}
                onChange={() =>
                  setExplanations(!explanations)
                }
              />

              <span className="slider"></span>

            </label>

          </div>


          {/* Time Limit */}

          <div className="setting-group">

            <div className="setting-title">

              <Clock size={20} />

              <div>
                <h3>Time Limit</h3>
                <p>
                  Choose how much time you want.
                </p>
              </div>

            </div>

            <select
              className="time-select"
              value={timeLimit}
              onChange={(e) =>
                setTimeLimit(Number(e.target.value))
              }
            >

              <option value={5}>5 Minutes</option>
              <option value={10}>10 Minutes</option>
              <option value={15}>15 Minutes</option>
              <option value={20}>20 Minutes</option>
              <option value={30}>30 Minutes</option>

            </select>

          </div>


          {/* Buttons */}

          <div className="settings-actions">

            <button
              className="back-button"
              onClick={() => navigate("/upload")}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              className="start-button"
              onClick={startQuiz}
            >
              Start Quiz
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default QuizSettings;

