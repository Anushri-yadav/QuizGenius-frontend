import { ArrowRight, Sparkles, Upload, FileText, Brain } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-background">
        <div className="gradient-circle circle-one"></div>
        <div className="gradient-circle circle-two"></div>
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="ai-badge">
            <Sparkles size={16} />
            AI-Powered Learning Platform
          </div>

          <h1>
            Turn Your PDFs Into
            <span> Smart Quizzes</span>
          </h1>

          <p>
            Upload your study material and let AI instantly create
            interactive quizzes, hints, answers and explanations.
          </p>

          <div className="hero-buttons">

            <Link to="/upload" className="primary-btn">
              <Upload size={19} />
              Upload PDF
              <ArrowRight size={18} />
            </Link>

            <a href="#how-it-works" className="secondary-btn">
              See How It Works
            </a>

          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <Brain size={18} />
              <span>AI Generated</span>
            </div>

            <div className="trust-item">
              <FileText size={18} />
              <span>PDF Support</span>
            </div>

            <div className="trust-item">
              <Sparkles size={18} />
              <span>Smart Hints</span>
            </div>
          </div>

        </div>

        <div className="hero-visual">

          <div className="quiz-preview">

            <div className="preview-header">
              <div>
                <small>Generated Quiz</small>
                <h3>Java Fundamentals</h3>
              </div>

              <div className="score">
                8/10
              </div>
            </div>

            <div className="question">
              <span className="question-number">
                Question 3 of 10
              </span>

              <h4>
                Which concept allows Java objects to take
                many forms?
              </h4>

              <div className="options">

                <div className="option">
                  <span>A</span>
                  Encapsulation
                </div>

                <div className="option correct">
                  <span>B</span>
                  Polymorphism
                </div>

                <div className="option">
                  <span>C</span>
                  Abstraction
                </div>

                <div className="option">
                  <span>D</span>
                  Inheritance
                </div>

              </div>

              <div className="hint">
                💡 Hint: Think about "many forms".
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;