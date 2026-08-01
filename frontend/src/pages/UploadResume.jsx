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
      alert("Please upload a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste the Job Description.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(resume, jobDescription);

      localStorage.setItem(
        "analysisResult",
        JSON.stringify(result)
      );

      // Simulate AI processing
      setTimeout(() => {
        setLoading(false);
        navigate("/analysis");
      }, 2500);

    } catch (err) {
      setLoading(false);

      alert(
        err.response?.data?.detail ||
          "Analysis failed."
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg text-center">

          <div className="text-6xl mb-6">
            🤖
          </div>

          <h2 className="text-3xl font-bold mb-4">
            AI is Analyzing...
          </h2>

          <div className="space-y-3 text-left mt-8">

            <p>✅ Uploading Resume</p>

            <p>✅ Extracting Text</p>

            <p>✅ Matching Skills</p>

            <p>✅ Calculating ATS Score</p>

            <p>✅ Generating Gemini Review</p>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-8">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-4xl">

        <h1 className="text-4xl font-bold mb-3">
          Upload Your Resume
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume and compare it against a job description using AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Upload Box */}

          <label className="block">

            <div className="border-2 border-dashed border-blue-400 rounded-2xl p-12 text-center cursor-pointer hover:bg-blue-50 transition">

              <div className="text-6xl mb-5">
                📄
              </div>

              <h2 className="text-2xl font-bold">
                Drag & Drop Resume
              </h2>

              <p className="text-gray-500 mt-2">
                or click to browse
              </p>

              <p className="mt-4 text-sm text-gray-400">
                PDF or DOCX
              </p>

              {resume && (
                <p className="mt-5 font-semibold text-green-600">
                  Selected: {resume.name}
                </p>
              )}

            </div>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
            />

          </label>

          {/* Job Description */}

          <div>

            <label className="font-semibold">
              Job Description
            </label>

            <textarea
              rows="10"
              className="w-full border rounded-xl p-4 mt-3"
              placeholder="Paste the Job Description..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
          >
            Analyze Resume
          </button>

        </form>

      </div>

    </div>
  );
}

export default UploadResume;