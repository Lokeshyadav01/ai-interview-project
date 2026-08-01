import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const latestResult = JSON.parse(
    localStorage.getItem("analysisResult")
  );

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          AI Resume Analyzer
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </nav>

      <div className="max-w-7xl mx-auto p-8">

        {/* Welcome */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8 mb-8">

          <h2 className="text-4xl font-bold">
            Welcome 👋
          </h2>

          <p className="mt-2 text-blue-100">
            Analyze resumes, improve ATS scores and receive AI-powered career feedback.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow p-6">

            <p className="text-gray-500">
              Total Resumes
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {latestResult ? 1 : 0}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <p className="text-gray-500">
              Latest ATS Score
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-3">
              {latestResult ? `${latestResult.ats_score}%` : "--"}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <p className="text-gray-500">
              Matched Skills
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-3">
              {latestResult?.matched_skills?.length || 0}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <p className="text-gray-500">
              Missing Skills
            </p>

            <h2 className="text-4xl font-bold text-red-600 mt-3">
              {latestResult?.missing_skills?.length || 0}
            </h2>

          </div>

        </div>

        {/* Quick Actions */}

        <h2 className="text-2xl font-bold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <Link
            to="/upload"
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">
              📄
            </div>

            <h3 className="text-xl font-bold">
              Upload Resume
            </h3>

            <p className="text-gray-500 mt-2">
              Upload a new resume for ATS analysis.
            </p>

          </Link>

          <Link
            to="/history"
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">
              📜
            </div>

            <h3 className="text-xl font-bold">
              History
            </h3>

            <p className="text-gray-500 mt-2">
              View all previous resume analyses.
            </p>

          </Link>

          <Link
            to="/analysis"
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">
              📊
            </div>

            <h3 className="text-xl font-bold">
              Latest Report
            </h3>

            <p className="text-gray-500 mt-2">
              Open the latest ATS report.
            </p>

          </Link>

        </div>

        {/* Latest Analysis */}

        <div className="bg-white rounded-xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Latest Analysis
          </h2>

          {latestResult ? (

            <div className="space-y-3">

              <p>
                <strong>Resume:</strong> {latestResult.filename}
              </p>

              <p>
                <strong>ATS Score:</strong> {latestResult.ats_score}%
              </p>

              <p>
                <strong>Word Count:</strong> {latestResult.word_count}
              </p>

              <p>
                <strong>Matched Skills:</strong>{" "}
                {latestResult.matched_skills?.join(", ")}
              </p>

            </div>

          ) : (

            <p className="text-gray-500">
              No resume analyzed yet.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;