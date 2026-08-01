import { motion } from "framer-motion";

function SkillProgress({ title, value, color }) {
  return (
    <div className="mb-6">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">
          {title}
        </span>

        <span>{value}%</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className={`${color} h-4 rounded-full`}
        />

      </div>

    </div>
  );
}

export default SkillProgress;