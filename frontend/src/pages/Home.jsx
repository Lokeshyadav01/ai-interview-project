import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h1>🚀 AI Interview Coach</h1>

        <h3>
          Practice Interviews, Analyze Resume,
          <br />
          Improve ATS Score using AI
        </h3>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to="/register">
            <button>Get Started</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}