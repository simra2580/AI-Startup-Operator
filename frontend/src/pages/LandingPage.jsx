import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lightbulb, 
  BarChart3, 
  Package, 
  Bot, 
  Users 
} from "lucide-react";
import Card from "../components/ui/Card";
import StatsCard from "../components/ui/StatsCard";

const LandingPage = () => {
  const features = [
    { icon: LayoutDashboard, title: "AI Dashboard", desc: "Complete startup management with AI insights" },
    { icon: Lightbulb, title: "Idea Validation", desc: "AI-powered market analysis and validation" },
    { icon: BarChart3, title: "Market Intelligence", desc: "Competitor analysis and trend prediction" },
    { icon: Package, title: "Product Builder", desc: "AI-assisted roadmap and MVP planning" },
    { icon: Bot, title: "AI Assistant", desc: "24/7 startup co-pilot with voice support" },
    { icon: Users, title: "Investor Hub", desc: "Pitch deck builder and funding tracker" },
  ];

  const stats = [
    { title: "Startups Launched", value: "10K+", change: "+23%" },
    { title: "Funding Raised", value: "$250M", change: "+45%" },
    { title: "AI Predictions", value: "99.8%", change: "+12%" },
    { title: "Success Rate", value: "87%", change: "+8%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              AI Startup Operator
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              The complete AI-powered platform to validate, build, and scale your startup 10x faster.
              From idea to $1M ARR with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login" className="btn-primary text-lg px-12 py-4">
                Start Free Trial
              </Link>
              <Link to="/dashboard" className="btn-secondary text-lg px-12 py-4">
                Watch Demo
              </Link>
            </div>
          </motion.div>

          {/* Animated AI Elements */}
          <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              AI-powered tools designed specifically for startup founders. No more spreadsheets or guesswork.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-neon mt-1 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/70">{feature.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Ready to Build Your $1B Startup?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join 10,000+ founders using AI Startup Operator to validate ideas, build products, and raise funding.
            </p>
            <Link to="/login" className="btn-primary text-xl px-16 py-5 inline-block">
              Launch Your Startup Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Startup Operator
              </span>
            </div>
            <div className="flex space-x-8 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <p className="text-white/40 mt-8">© 2024 AI Startup Operator. Built for founders.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;