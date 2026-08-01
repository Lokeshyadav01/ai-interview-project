import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Improve Your Resume?
        </h2>

        <p className="text-lg text-blue-100 mb-10">
          Get instant ATS feedback and AI-powered suggestions
          to increase your chances of landing interviews.
        </p>

        <Link
          to="/upload"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Analyze My Resume
        </Link>

      </div>
    </section>
  );
}

export default CTA;