import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h2 className="text-2xl font-bold">
              AI Resume Analyzer
            </h2>

            <p className="text-gray-400 mt-4">
              Built using React, FastAPI, Gemini AI and PostgreSQL.
            </p>

          </div>

          <div className="flex md:justify-end gap-6 text-3xl">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 AI Resume Analyzer. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;