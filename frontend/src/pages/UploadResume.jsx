import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaBriefcase,
  FaRobot,
} from "react-icons/fa";

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
        "Analysis Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 py-14 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-12">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white text-4xl shadow-lg mb-6">

            <FaRobot />

          </div>

          <h1 className="text-5xl font-bold">

            AI Resume Analyzer

          </h1>

          <p className="text-gray-500 mt-4 text-lg">

            Upload your resume and compare it against any job description using AI.

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-10"
        >

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-8">

              Upload Resume

            </h2>

            <label
              htmlFor="resume"
              className="border-2 border-dashed border-blue-400 rounded-3xl h-80 flex flex-col justify-center items-center cursor-pointer hover:bg-blue-50 transition"
            >

              <FaCloudUploadAlt
                size={70}
                className="text-blue-600 mb-6"
              />

              <h3 className="text-2xl font-bold">

                Drag & Drop Resume

              </h3>

              <p className="text-gray-500 mt-3">

                or click to browse

              </p>

              <p className="text-sm text-gray-400 mt-2">

                PDF & DOCX Supported

              </p>

              <input
                id="resume"
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
              />

            </label>

            {resume && (

              <div className="mt-8 rounded-xl bg-slate-100 p-5 flex items-center gap-4">

                <FaFilePdf
                  className="text-red-500"
                  size={35}
                />

                <div>

                  <h3 className="font-bold">

                    {resume.name}

                  </h3>

                  <p className="text-gray-500 text-sm">

                    {(resume.size / 1024).toFixed(1)} KB

                  </p>

                </div>

              </div>

            )}

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">

              <FaBriefcase />

              Job Description

            </h2>

            <textarea
              rows="14"
              placeholder="Paste the complete job description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
              className="w-full rounded-2xl border p-5 focus:ring-4 focus:ring-blue-200 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold transition"
            >

              {loading
                ? "Analyzing Resume..."
                : "Analyze Resume"}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default UploadResume;