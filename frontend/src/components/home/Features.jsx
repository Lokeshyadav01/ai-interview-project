function Features() {
  const features = [
    {
      title: "ATS Score",
      description:
        "Instantly calculate how well your resume matches the job description.",
      icon: "📊",
    },
    {
      title: "Skill Analysis",
      description:
        "Identify matched and missing skills required for your target role.",
      icon: "🎯",
    },
    {
      title: "AI Resume Review",
      description:
        "Receive detailed resume feedback powered by Google Gemini AI.",
      icon: "🤖",
    },
    {
      title: "Resume Suggestions",
      description:
        "Get personalized recommendations to improve your resume.",
      icon: "💡",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Everything you need to optimize your resume.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;