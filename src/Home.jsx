import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="logo">
            <div className="logo-icon">Q</div>
            <span>
              Quiz<span className="logo-ai">Genius</span>
            </span>
          </Link>

          <div className="nav-links">
            <a href="#features">Features</a>
            <Link to="/upload">Create Quiz</Link>
          </div>

          <Link to="/upload" className="signup-btn">
            Get Started
          </Link>

        </div>
      </nav>


      <section className="hero">

        <div className="gradient-circle circle-one"></div>
        <div className="gradient-circle circle-two"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="ai-badge">
              ✨ AI Powered Quiz Generator
            </div>

            <h1>
              Turn your PDFs into
              <span>interactive quizzes.</span>
            </h1>

            <p>
              Upload any question PDF and let QuizGenius
              automatically create an engaging quiz with
              hints, answers and scoring.
            </p>

            <div className="hero-buttons">

              <Link
                to="/upload"
                className="primary-btn"
              >
                Get Started →
              </Link>

              <a
                href="#features"
                className="secondary-btn"
              >
                Explore Features
              </a>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                ✓ AI Generated
              </div>

              <div className="trust-item">
                ✓ Instant Quiz
              </div>

              <div className="trust-item">
                ✓ Free
              </div>

            </div>

          </div>


          <div className="hero-visual">

            <div className="quiz-preview">

              <div className="preview-header">

                <div>
                  <small>QuizGenius</small>
                  <h3>Java Basics</h3>
                </div>

                <div className="score">
                  80%
                </div>

              </div>

              <div className="question">

                <span className="question-number">
                  QUESTION 2 OF 5
                </span>

                <h4>
                  Which language is used to build
                  Spring Boot applications?
                </h4>

                <div className="options">

                  <div className="option correct">
                    <span>A</span>
                    Java
                  </div>

                  <div className="option">
                    <span>B</span>
                    Python
                  </div>

                  <div className="option">
                    <span>C</span>
                    HTML
                  </div>

                  <div className="option">
                    <span>D</span>
                    SQL
                  </div>

                </div>

                <div className="hint">
                  💡 Hint: Think about the language
                  Spring Framework is built with.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section
        id="features"
        className="features-section"
      >

        <div className="section-header">

          <div className="section-badge">
            FEATURES
          </div>

          <h2>
            Everything you need to
            <span> learn smarter.</span>
          </h2>

          <p>
            QuizGenius turns static study material
            into an interactive learning experience.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              📄
            </div>

            <h3>
              PDF to Quiz
            </h3>

            <p>
              Upload your PDF and automatically
              generate multiple-choice questions.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              AI Generated
            </h3>

            <p>
              AI understands your study material
              and creates relevant questions.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💡
            </div>

            <h3>
              Smart Hints
            </h3>

            <p>
              Get helpful hints whenever you're
              stuck on a difficult question.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🎮
            </div>

            <h3>
              Game Mode
            </h3>

            <p>
              Answer questions, earn points and
              challenge yourself.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Score Tracking
            </h3>

            <p>
              See your final score after completing
              the quiz.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Instant Results
            </h3>

            <p>
              Generate a complete quiz in seconds
              from your PDF.
            </p>

          </div>

        </div>

      </section>


      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo">
              <div className="logo-icon">Q</div>
              QuizGenius
            </div>

            <p>
              Transform your study material into
              interactive quizzes with AI.
            </p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 QuizGenius. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;