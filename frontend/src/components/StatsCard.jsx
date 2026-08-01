import { motion } from "framer-motion";

function StatsCard({ title, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </p>
    </motion.div>
  );
}

export default StatsCard;