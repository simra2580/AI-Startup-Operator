import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Card = ({ children, className = "", hoverEffect = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        "glass-card p-6",
        hoverEffect && "hover:shadow-neon hover:-translate-y-2",
        className
      )}
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;