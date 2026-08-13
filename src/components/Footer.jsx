import { Brain } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            <Brain size={22} />
            <span>Quiz50</span>
          </div>

          <p>
            Transform your study material into
            intelligent quizzes.
          </p>

        </div>

        <div className="footer-column">

          <h4>Product</h4>

          <a href="#features">Features</a>
          <a href="#">Dashboard</a>
          <a href="#">Quiz Generator</a>

        </div>

        <div className="footer-column">

          <h4>Resources</h4>

          <a href="#how-it-works">How It Works</a>
          <a href="#">Documentation</a>
          <a href="#">Help Center</a>

        </div>

        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
         © 2026 Quiz50. <br />
Developed with Spring Boot by Anushri Yadav <br/> Contact: d.yaanushri0305@gmail.com

        </p>
      </div>

    </footer>
  );
}

export default Footer;