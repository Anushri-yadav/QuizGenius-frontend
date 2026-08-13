import {
  Brain,
  FileText,
  Lightbulb,
  BarChart3,
  Clock,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    icon: <Brain />,
    title: "Quiz Generation",
    description:
      "Turn your PDF study material into meaningful questions automatically."
  },
  {
    icon: <FileText />,
    title: "PDF Upload",
    description:
      "Upload your notes, books, assignments or study material with me."
  },
  {
    icon: <Lightbulb />,
    title: "Smart Hints",
    description:
      "Get helpful hints whenever you are stuck on a question."
  },
  {
    icon: <BarChart3 />,
    title: "Detailed Analytics",
    description:
      "Track your score, accuracy and quiz performance over time."
  },
  {
    icon: <Clock />,
    title: "Timed Quizzes",
    description:
      "Challenge yourself with customizable quiz timers and difficulty."
  },
  {
    icon: <ShieldCheck />,
    title: "Secure Accounts",
    description:
      "Your quizzes, scores and personal information are secure."
  }
];

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="section-header">

        <div className="section-badge">
          ✨ Powerful Features
        </div>

        <h2>
          Everything You Need to
          <span> Learn Smarter</span>
        </h2>

        <p>
          Quiz50 make studying faster and more effective.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;