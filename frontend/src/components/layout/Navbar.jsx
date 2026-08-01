import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🚀 AI Resume Analyzer
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-600 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            className="hover:text-blue-600 font-medium"
          >
            Upload
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-600 font-medium"
          >
            History
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;