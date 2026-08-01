import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-24 bg-blue-600">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center px-8"
      >

        <h2 className="text-5xl font-bold text-white">
          Ready to Improve Your Resume?
        </h2>

        <p className="text-blue-100 mt-6 text-xl">
          Upload your resume and receive instant AI-powered feedback.
        </p>

        <Link
          to="/upload"
          className="inline-block mt-10 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Analyze My Resume
        </Link>

      </motion.div>

    </section>
  );
}

export default CTA;