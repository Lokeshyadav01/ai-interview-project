import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Interview Coach
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-2">
          Welcome 👋
        </h2>

        <p className="text-gray-600 mb-8">
          Prepare for interviews with AI-powered resume analysis.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            to="/upload"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">📄</div>
            <h3 className="font-bold text-xl">
              Upload Resume
            </h3>

            <p className="text-gray-500 mt-2">
              Upload PDF or DOCX
            </p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">📊</div>

            <h3 className="font-bold text-xl">
              ATS Score
            </h3>

            <p className="text-gray-500 mt-2">
              No resume analyzed yet.
            </p>
          </div>

          <Link
            to="/history"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">📜</div>

            <h3 className="font-bold text-xl">
              History
            </h3>

            <p className="text-gray-500 mt-2">
              View previous analyses
            </p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">🤖</div>

            <h3 className="font-bold text-xl">
              AI Interview
            </h3>

            <p className="text-gray-500 mt-2">
              Coming Soon
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;