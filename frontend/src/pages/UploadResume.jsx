import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { analyzeResume } from "../services/analysisService";

function UploadResume() {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please select a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(
        resume,
        jobDescription
      );

      localStorage.setItem(
        "analysisResult",
        JSON.stringify(result)
      );

      navigate("/analysis");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.detail ||
        "Analysis failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-10">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl">

        <h1 className="text-3xl font-bold mb-2">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume and paste the job description.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="font-semibold">
              Resume
            </label>

            <input
              type="file"
              accept=".pdf,.docx"
              className="mt-2 w-full border rounded-lg p-3"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
            />
          </div>

          <div>
            <label className="font-semibold">
              Job Description
            </label>

            <textarea
              rows="10"
              className="mt-2 w-full border rounded-lg p-4"
              placeholder="Paste Job Description..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default UploadResume;