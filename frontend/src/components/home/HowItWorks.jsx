import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload Resume",
    description:
      "Upload your PDF or DOCX resume securely.",
  },
  {
    number: "02",
    title: "Paste Job Description",
    description:
      "Provide the job description you want to target.",
  },
  {
    number: "03",
    title: "Get AI Analysis",
    description:
      "Receive ATS score, skill analysis, and AI feedback instantly.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-gray-500 mt-4">
            Analyze your resume in just three simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-md text-center"
            >

              <div className="text-5xl font-extrabold text-blue-600 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-500">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;