import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const TopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();

  return (
    <div className="glass-card p-6 border-b border-white/10 shadow-glass">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-white/60" />
            <input
              type="text"
              placeholder="Search startups, tasks..."
              className="w-80 pl-11 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div
            className="glass-card p-2 rounded-xl cursor-pointer hover:shadow-neon"
            whileHover={{ scale: 1.05 }}
          >
            <Bell className="w-5 h-5 text-white/60" />
          </motion.div>

          <div className="flex items-center space-x-3 p-2 glass-card rounded-xl cursor-pointer hover:shadow-neon group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-neon flex items-center justify-center">
              {user?.name?.[0] || "A"}
            </div>
            <div className="hidden md:block">
              <p className="font-semibold text-sm">{user?.name || "User"}</p>
              <p className="text-xs text-white/60">Founder</p>
            </div>
            <ChevronDown className="w-4 h-4 text-white/60 group-hover:rotate-180 transition-transform" />
          </div>

          <motion.button
            onClick={logout}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;