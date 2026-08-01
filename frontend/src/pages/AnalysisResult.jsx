import ReactMarkdown from "react-markdown";

import ScoreCircle from "../components/ScoreCircle";
import StatsCard from "../components/StatsCard";
import SkillProgress from "../components/SkillProgress";

function AnalysisResult() {
  const result = JSON.parse(localStorage.getItem("analysisResult"));
  const navigate = useNavigate();

  console.log(result);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-red-500">
          No Analysis Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

<div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex justify-between items-center">

  <div>

    <h1 className="text-4xl font-bold">
      AI Resume Analysis
    </h1>

    <p className="text-gray-500 mt-2">
      Complete ATS Report & AI Resume Feedback
    </p>

  </div>

  <button
    onClick={() => window.print()}
    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
  >
    📄 Download Report
  </button>

</div>

        {/* Score + Stats */}

        <div className="grid lg:grid-cols-3 gap-8 mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 flex justify-center items-center">

            <ScoreCircle score={result.ats_score} />

          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            <StatsCard
              title="ATS Score"
              value={`${result.ats_score}%`}
              color="text-blue-600"
            />

            <StatsCard
              title="Word Count"
              value={result.word_count}
              color="text-green-600"
            />

            <StatsCard
              title="Matched Skills"
              value={result.matched_skills?.length || 0}
              color="text-purple-600"
            />

            <StatsCard
              title="Missing Skills"
              value={result.missing_skills?.length || 0}
              color="text-red-600"
            />

          </div>

        </div>

        {/* ATS Breakdown */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            ATS Breakdown
          </h2>

          <SkillProgress
            title="Skills"
            value={result.category_scores?.skills || 0}
            color="bg-green-500"
          />

          <SkillProgress
            title="Resume Length"
            value={result.category_scores?.resume_length || 0}
            color="bg-blue-500"
          />

          <SkillProgress
            title="Projects"
            value={result.category_scores?.projects || 0}
            color="bg-purple-500"
          />

          <SkillProgress
            title="Experience"
            value={result.category_scores?.experience || 0}
            color="bg-yellow-500"
          />

          <SkillProgress
            title="Education"
            value={result.category_scores?.education || 0}
            color="bg-pink-500"
          />

          <SkillProgress
            title="Contact"
            value={result.category_scores?.contact || 0}
            color="bg-red-500"
          />

        </div>

        {/* Skills */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-green-600 mb-6">
              ✅ Matched Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {result.matched_skills?.length ? (

                result.matched_skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>

                ))

              ) : (

                <p>No matched skills.</p>

              )}

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-red-600 mb-6">
              ❌ Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {result.missing_skills?.length ? (

                result.missing_skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>

                ))

              ) : (

                <p>No missing skills 🎉</p>

              )}

            </div>

          </div>

        </div>

        {/* Resume Sections */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Resume Sections
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {result.sections_found?.map((section) => (

              <div
                key={section}
                className="bg-slate-100 rounded-xl p-4 font-semibold"
              >
                ✅ {section}
              </div>

            ))}

          </div>

        </div>

        {/* Strengths & Weaknesses */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-green-600 mb-6">
              💪 Strengths
            </h2>

            <ul className="space-y-3">

              {result.strengths?.map((item, index) => (

                <li key={index}>
                  ✅ {item}
                </li>

              ))}

            </ul>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-red-600 mb-6">
              ⚠ Weaknesses
            </h2>

            <ul className="space-y-3">

              {result.weaknesses?.map((item, index) => (

                <li key={index}>
                  ❌ {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Suggestions */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            💡 Resume Suggestions
          </h2>

          <ul className="space-y-4">

            {result.resume_suggestions?.map((item, index) => (

              <li
                key={index}
                className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg"
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

        {/* Feedback */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            📋 ATS Feedback
          </h2>

          <ul className="space-y-4">

            {result.feedback?.map((item, index) => (

              <li
                key={index}
                className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg"
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

        {/* Gemini Review */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            🤖 Gemini AI Review
          </h2>

          <div className="prose prose-lg max-w-none">

            <ReactMarkdown>
              {result.gemini_review}
            </ReactMarkdown>

          </div>

        </div>
                {/* Action Buttons */}

        <div className="flex justify-center gap-5 mt-10">

          <button
            onClick={() => navigate("/upload")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Analyze Another Resume
          </button>

          <button
            onClick={() => window.print()}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Download Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default AnalysisResult;