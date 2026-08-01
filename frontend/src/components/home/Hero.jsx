import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 AI Powered Resume Analyzer
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

              Get Your Resume
              <br />

              <span className="text-yellow-300">
                ATS Ready
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-100 leading-8">

              Upload your resume, compare it with any job description,
              receive an ATS score, discover missing skills,
              and get AI-powered suggestions to improve your chances
              of getting shortlisted.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/upload"
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Analyze Resume
              </Link>

              <Link
                to="/register"
                className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Get Started
              </Link>

            </div>

            <div className="flex gap-10 mt-12">

              <div>

                <h2 className="text-3xl font-bold">
                  95%
                </h2>

                <p className="text-gray-200">
                  ATS Accuracy
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  AI
                </h2>

                <p className="text-gray-200">
                  Gemini Review
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  100+
                </h2>

                <p className="text-gray-200">
                  Skill Checks
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Resume Analysis Preview
              </h3>

              <div className="space-y-5">

                <div>

                  <div className="flex justify-between mb-2">

                    <span className="text-gray-700">
                      ATS Score
                    </span>

                    <span className="font-bold text-blue-600">
                      92%
                    </span>

                  </div>

                  <div className="h-3 bg-gray-200 rounded-full">

                    <div className="h-3 w-[92%] bg-blue-600 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <h4 className="font-semibold text-green-600 mb-2">
                    Matched Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "Python",
                      "SQL",
                      "React",
                      "FastAPI",
                    ].map((skill) => (

                      <span
                        key={skill}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

                <div>

                  <h4 className="font-semibold text-red-600 mb-2">
                    Missing Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "Power BI",
                      "Tableau",
                    ].map((skill) => (

                      <span
                        key={skill}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">

                  <p className="text-gray-700">

                    💡 Add Power BI and Tableau projects to improve
                    your ATS score for Data Analyst roles.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;