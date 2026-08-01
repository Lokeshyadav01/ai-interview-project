import { motion } from "framer-motion";

function ScoreCircle({ score }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-52 h-52 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl"
    >
      <div className="w-44 h-44 rounded-full bg-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-blue-600">
          {score}%
        </h1>

        <p className="text-gray-500 font-semibold mt-2">
          ATS Score
        </p>
      </div>
    </motion.div>
  );
}

export default ScoreCircle;