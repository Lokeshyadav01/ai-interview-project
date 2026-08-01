import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">

      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-5">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;