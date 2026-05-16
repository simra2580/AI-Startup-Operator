import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import {
  CheckCircle,
  Rocket,
  Package,
} from "lucide-react";

const roadmap = [
  "Idea Validation",
  "MVP Development",
  "Beta Launch",
  "Scaling",
];

const features = [
  "Authentication System",
  "AI Dashboard",
  "Analytics",
  "Payment Integration",
];

export default function ProductBuilder() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">
          Product Builder
        </h1>
        <p className="text-white/60">
          Plan and build your MVP roadmap.
        </p>
      </div>

      <Card>
        <div className="flex items-center space-x-3 mb-6">
          <Rocket className="w-7 h-7 text-purple-400" />
          <h2 className="text-2xl font-bold">
            Startup Roadmap
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {roadmap.map((step, index) => (
            <motion.div
              key={step}
              whileHover={{ y: -5 }}
              className="glass-card p-5 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto flex items-center justify-center mb-4">
                {index + 1}
              </div>

              <h3 className="font-semibold">{step}</h3>
            </motion.div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-3 mb-6">
          <Package className="w-7 h-7 text-cyan-400" />
          <h2 className="text-2xl font-bold">
            MVP Checklist
          </h2>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="glass-card p-4 flex items-center space-x-4"
            >
              <CheckCircle className="text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}