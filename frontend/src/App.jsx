import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadResume from "./pages/UploadResume";
import AnalysisResult from "./pages/AnalysisResult";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/upload" element={<UploadResume />} />

      <Route path="/analysis" element={<AnalysisResult />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/history" element={<History />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;