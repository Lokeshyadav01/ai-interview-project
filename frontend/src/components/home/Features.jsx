import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine size={35} className="text-blue-600" />,
    title: "ATS Score",
    description:
      "Instantly check how well your resume matches any job description.",
  },
  {
    icon: <FaRobot size={35} className="text-purple-600" />,
    title: "AI Resume Review",
    description:
      "Get detailed AI-powered feedback to improve your resume.",
  },
  {
    icon: <FaFileAlt size={35} className="text-orange-500" />,
    title: "Resume Suggestions",
    description:
      "Receive actionable suggestions to make your resume stronger.",
  },
  {
    icon: <FaCheckCircle size={35} className="text-green-600" />,
    title: "Skill Matching",
    description:
      "Identify matched and missing skills required for your dream job.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Everything you need to improve your resume and increase your ATS score.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;