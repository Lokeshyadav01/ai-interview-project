function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description:
        "Upload your PDF or DOCX resume in seconds.",
    },
    {
      number: "02",
      title: "Paste Job Description",
      description:
        "Paste the job description you want to apply for.",
    },
    {
      number: "03",
      title: "AI Analysis",
      description:
        "Our AI analyzes your resume against the job requirements.",
    },
    {
      number: "04",
      title: "Improve & Apply",
      description:
        "Get ATS score, missing skills, and actionable suggestions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          How It Works
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Analyze your resume in just four simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center bg-slate-50 rounded-2xl p-8 shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;