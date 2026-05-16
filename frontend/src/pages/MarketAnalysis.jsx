import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import {
  TrendingUp,
  Users,
  Globe,
  BarChart3,
} from "lucide-react";

const competitors = [
  { name: "OpenAI", market: "35%", growth: "+18%" },
  { name: "Anthropic", market: "20%", growth: "+14%" },
  { name: "Perplexity", market: "12%", growth: "+22%" },
];

export default function MarketAnalysis() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">
          Market Analysis
        </h1>
        <p className="text-white/60">
          AI-powered market intelligence dashboard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <Globe className="w-10 h-10 text-cyan-400 mb-4" />
          <h2 className="text-3xl font-bold">$42B</h2>
          <p className="text-white/60">Market Size</p>
        </Card>

        <Card>
          <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
          <h2 className="text-3xl font-bold">28%</h2>
          <p className="text-white/60">Annual Growth</p>
        </Card>

        <Card>
          <Users className="w-10 h-10 text-purple-400 mb-4" />
          <h2 className="text-3xl font-bold">12M+</h2>
          <p className="text-white/60">Target Users</p>
        </Card>
      </div>

      <Card>
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="w-7 h-7 text-blue-400" />
          <h2 className="text-2xl font-bold">
            Competitor Analysis
          </h2>
        </div>

        <div className="space-y-4">
          {competitors.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-white/60">
                  Market Share: {item.market}
                </p>
              </div>

              <div className="text-green-400 font-bold">
                {item.growth}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}