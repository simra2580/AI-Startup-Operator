import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { Lightbulb, Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const IdeaValidation = () => {
  const [idea, setIdea] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Idea Validation
        </h1>
        <p className="text-xl text-white/60">Get AI-powered validation for your startup idea in seconds.</p>
      </div>

      {/* Idea Input */}
      <Card className="p-0">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-bold">Describe your startup idea</h3>
          </div>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., AI-powered personal finance coach that analyzes spending patterns and provides real-time advice..."
            className="w-full p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 resize-vertical min-h-[120px] text-lg"
          />
          <motion.button 
            className="btn-primary mt-6 px-12 py-4 ml-auto block"
            whileHover={{ scale: 1.02 }}
          >
            Analyze Idea
          </motion.button>
        </div>
      </Card>

      {/* Validation Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-neon">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Market Fit</h3>
              <p className="text-white/60">Score</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-neon">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Scalability</h3>
              <p className="text-white/60">Potential</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: '87%' }} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-neon">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Revenue Potential</h3>
              <p className="text-white/60">Projection</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-purple-400 mb-2">$2.4M</div>
          <p className="text-white/60 text-sm">Year 1 ARR</p>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-neon">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Risk Level</h3>
              <p className="text-white/60">Assessment</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-orange-400 mb-2">Low</div>
          <p className="text-white/60 text-sm">3/10 risk factors</p>
        </Card>
      </div>

      {/* SWOT Analysis */}
      <Card>
        <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-neon">
            S
          </div>
          <span>SWOT Analysis</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="glass-card p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Strengths
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• Large addressable market ($50B TAM)</li>
                <li>• Strong AI differentiation</li>
                <li>• Experienced founding team</li>
              </ul>
            </div>
            <div className="glass-card p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                Weaknesses
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• High initial development cost</li>
                <li>• Regulatory uncertainty</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Opportunities
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• Enterprise partnerships</li>
                <li>• International expansion</li>
                <li>• API marketplace</li>
              </ul>
            </div>
            <div className="glass-card p-6 border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Threats
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• Emerging competitors</li>
                <li>• Economic downturn</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      <Card>
        <h3 className="text-2xl font-bold mb-8">Recommended Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Build MVP", priority: "High", time: "2 weeks" },
            { title: "Customer Interviews", priority: "High", time: "1 week" },
            { title: "Competitor Analysis", priority: "Medium", time: "3 days" },
            { title: "Pitch Deck", priority: "Medium", time: "5 days" },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-6 hover:shadow-neon"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">{step.title}</h4>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  step.priority === "High" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {step.priority}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">{step.time}</span>
                <button className="btn-primary text-sm px-4 py-1">Start</button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default IdeaValidation;