import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload({ setQuiz }) {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("PDF must be smaller than 10 MB.");
      return;
    }

    setError("");
    setFile(selectedFile);
  };


  const generateQuiz = async () => {

    if (!file) {
        setError("Please select a PDF first.");
        return;
    }

    const token = localStorage.getItem("token");

    console.log("JWT TOKEN:", token);
    
    if (!token) {
        navigate("/login");
        return;
    }

    setLoading(true);
    setError("");

    try {

        const formData = new FormData();

        formData.append("file", file);


        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quiz/generate-from-pdf`,
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${token}`
                },

                body: formData
            }
        );


        if (response.status === 401) {

            localStorage.removeItem("token");
            localStorage.removeItem("username");

            navigate("/login");

            return;
        }


        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(
                errorText ||
                "Failed to generate quiz."
            );
        }


        const data =
            await response.json();


        console.log(
            "Quiz JSON:",
            data
        );


        setQuiz(data);

        navigate("/quiz");


    } catch (error) {

        console.error(error);

        setError(
            error.message ||
            "Could not generate quiz."
        );

    } finally {

        setLoading(false);

    }
};


  return (

    <div className="upload-page">

      <div className="upload-container">

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <div className="upload-card">

          <div className="upload-icon">
            📄
          </div>

          <h1>
            Generate Your Quiz
          </h1>

          <p>
            Upload a question PDF and let QuizGenius
            turn it into an interactive quiz.
          </p>


          <div className="upload-area">

            <h3>
              Upload your PDF
            </h3>

            <p>
              Drag and drop your question PDF here
              or click below to browse.
            </p>

            <label className="choose-file">

              {file
                ? file.name
                : "Choose PDF"}

              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                hidden
              />

            </label>

            <small>
              PDF files only • Maximum 10 MB
            </small>

          </div>


          {error && (
            <div className="error-message">
              {error}
            </div>
          )}


          {file && (

            <div className="selected-file">

              <span>
                📄 {file.name}
              </span>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>

          )}


          <button
            className="generate-button"
            onClick={generateQuiz}
            disabled={loading || !file}
          >

            {loading
              ? "Generating Quiz..."
              : "Generate Quiz →"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Upload;