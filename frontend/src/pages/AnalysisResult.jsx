function AnalysisResult() {

  const result = JSON.parse(
    localStorage.getItem("analysisResult")
  );

  if (!result) {
    return (
      <h1 className="text-center mt-20 text-2xl">
        No Analysis Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            ATS Score
          </h2>

          <p className="text-5xl text-blue-600 mt-3">
            {result.ats_score}%
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="text-xl font-bold mb-4">
              Matched Skills
            </h2>

            <ul className="space-y-2">

              {result.matched_skills?.map((skill) => (
                <li key={skill}>
                  ✅ {skill}
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h2 className="text-xl font-bold mb-4">
              Missing Skills
            </h2>

            <ul className="space-y-2">

              {result.missing_skills?.map((skill) => (
                <li key={skill}>
                  ❌ {skill}
                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            AI Review
          </h2>

          <div className="bg-slate-100 p-6 rounded-xl whitespace-pre-wrap">
            {result.gemini_review}
          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalysisResult;