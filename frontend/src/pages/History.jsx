import { Link } from "react-router-dom";

function History() {
  const latestResult = JSON.parse(
    localStorage.getItem("analysisResult")
  );

  const history = latestResult ? [latestResult] : [];

  const clearHistory = () => {
    if (window.confirm("Delete all history?")) {
      localStorage.removeItem("analysisResult");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-white shadow">

        <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Resume History
            </h1>

            <p className="text-gray-500">
              View previous resume analyses
            </p>

          </div>

          <button
            onClick={clearHistory}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Clear History
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto p-8">

        {history.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold mb-3">
              No Resume History
            </h2>

            <p className="text-gray-500 mb-6">
              Analyze your first resume to see it here.
            </p>

            <Link
              to="/upload"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Analyze Resume
            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {history.map((resume, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >

                <div className="text-5xl mb-4">
                  📄
                </div>

                <h2 className="text-xl font-bold mb-2">
                  {resume.filename}
                </h2>

                <p className="text-gray-500 mb-4">
                  ATS Score
                </p>

                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {resume.ats_score}%
                </div>

                <div className="flex justify-between">

                  <Link
                    to="/analysis"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <span className="text-gray-400">
                    Resume #{resume.resume_id}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default History;