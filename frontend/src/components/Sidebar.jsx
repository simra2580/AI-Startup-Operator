import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lightbulb, 
  BarChart3, 
  Package, 
  List, 
  Activity, 
  Bot, 
  Users, 
  Settings 
} from "lucide-react";
const navItems = [
  { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
  { path: "/dashboard/idea-validation", name: "Idea Validation", icon: Lightbulb },
  { path: "/dashboard/market-analysis", name: "Market Analysis", icon: BarChart3 },
  { path: "/dashboard/product-builder", name: "Product Builder", icon: Package },
  { path: "/dashboard/task-manager", name: "Task Manager", icon: List },
  { path: "/dashboard/analytics", name: "Analytics", icon: Activity },
  { path: "/dashboard/ai-assistant", name: "AI Assistant", icon: Bot },
  { path: "/dashboard/investor-hub", name: "Investor Hub", icon: Users },
  { path: "/dashboard/settings", name: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="h-full bg-black/80 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-glass"
    >
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-neon"
            whileHover={{ scale: 1.05 }}
          />
          {!isCollapsed && (
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              AI Startup
            </motion.h1>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`glass-card p-4 rounded-xl flex items-center space-x-4 cursor-pointer group ${
                  isActive ? "bg-gradient-to-r from-purple-500/20 border-purple-500/50 shadow-neon" : ""
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "text-purple-400" : "text-white/60 group-hover:text-white"}`} />
                {!isCollapsed && (
                  <span className={`font-medium ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                    {item.name}
                  </span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <motion.div
          className="glass-card p-4 rounded-xl cursor-pointer flex items-center space-x-3 hover:shadow-neon"
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg" />
          {!isCollapsed && <span>Collapse</span>}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;