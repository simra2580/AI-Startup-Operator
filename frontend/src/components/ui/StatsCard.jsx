import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const StatsCard = ({ title, value, change, trend = "up", className = "" }) => {
  return (
    <motion.div
      className={cn("glass-card p-6", className)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className={`p-2 rounded-xl ${
          trend === "up" 
            ? "bg-green-500/20 border border-green-500/50" 
            : "bg-red-500/20 border border-red-500/50"
        }`}>
          <span className={`text-sm font-semibold ${
            trend === "up" ? "text-green-400" : "text-red-400"
          }`}>
            {change}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;