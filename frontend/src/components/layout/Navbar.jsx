import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-blue-600 p-3 rounded-xl text-white">
            <FaRobot size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              AI Resume Analyzer
            </h1>

            <p className="text-xs text-gray-500">
              Smart ATS Scanner
            </p>
          </div>
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/upload"
            className="hover:text-blue-600 transition"
          >
            Upload
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-600 transition"
          >
            History
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-600 transition"
          >
            Profile
          </Link>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;