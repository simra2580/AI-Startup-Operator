import { motion } from "framer-motion";
import StatsCard from "../components/ui/StatsCard";
import Card from "../components/ui/Card";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Clock,
  Lightbulb
} from "lucide-react";
import { 
  LineChart, 
  BarChart, 
  PieChart 
} from "recharts";

// Dummy data
const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 42000 },
];

const growthData = [
  { name: "Week 1", growth: 12 },
  { name: "Week 2", growth: 18 },
  { name: "Week 3", growth: 25 },
  { name: "Week 4", growth: 32 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Dashboard Overview
          </h1>
          <p className="text-white/60">Welcome back! Here's what's happening with your startup.</p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button className="btn-primary px-6 py-2" whileHover={{ scale: 1.05 }}>
            New Project
          </motion.button>
          <motion.button className="glass-card p-2 hover:shadow-neon" whileHover={{ scale: 1.1 }}>
            <Activity className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Monthly Revenue" 
          value="$42.8K" 
          change="+28%" 
          trend="up"
        />
        <StatsCard 
          title="User Growth" 
          value="2.4K" 
          change="+15%" 
          trend="up"
        />
        <StatsCard 
          title="Validation Score" 
          value="92%" 
          change="+8%" 
          trend="up"
        />
        <StatsCard 
          title="Tasks Complete" 
          value="87%" 
          change="+12%" 
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <Card className="p-0">
          <div className="p-8 border-b border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Revenue Growth</h3>
            <p className="text-white/60">Monthly recurring revenue</p>
          </div>
          <div className="p-8">
            <LineChart width={600} height={300} data={revenueData}>
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={4} dot={{ fill: "#8b5cf6", strokeWidth: 2 }} />
              <CartesianGrid strokeDasharray="5 5" stroke="#374151" vertical={false} />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
            </LineChart>
          </div>
        </Card>

        {/* Growth Chart */}
        <Card className="p-0">
          <div className="p-8 border-b border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">User Growth</h3>
            <p className="text-white/60">Weekly active users</p>
          </div>
          <div className="p-8">
            <BarChart width={600} height={300} data={growthData}>
              <Bar dataKey="growth" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            </BarChart>
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white">Recent Projects</h3>
          </div>
          <div className="space-y-4">
            {[
              { name: "FinTech MVP", progress: 85, status: "active" },
              { name: "SaaS Platform", progress: 62, status: "active" },
              { name: "AI Chatbot", progress: 45, status: "planning" },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{project.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-white/60 mt-1">{project.progress}% complete</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">AI Insights</h3>
          </div>
          <div className="space-y-4">
            {[
              "Your SaaS idea has 87% market fit",
              "Increase pricing by 15% for optimal revenue",
              "Target enterprise customers next quarter",
              "FinTech MVP ready for beta testing"
            ].map((insight, index) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 border-l-4 border-purple-500"
              >
                <p className="text-white/90">{insight}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "Add Team", color: "from-pink-500 to-orange-500" },
              { icon: DollarSign, label: "Track Funding", color: "from-green-500 to-emerald-500" },
              { icon: Clock, label: "Set Goals", color: "from-blue-500 to-cyan-500" },
              { icon: Activity, label: "View Analytics", color: "from-purple-500 to-violet-500" },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  className={`glass-card p-6 hover:shadow-neon ${action.color} bg-gradient-to-br`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-white" />
                  <span className="text-sm font-medium text-white block">{action.label}</span>
                </motion.button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;