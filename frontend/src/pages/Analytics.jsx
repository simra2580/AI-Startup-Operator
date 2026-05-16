import Card from "../components/ui/Card";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 700 },
  { month: "Mar", users: 1200 },
  { month: "Apr", users: 2000 },
];

export default function Analytics() {
  return (
    <div className="space-y-8 p-6 text-white">
      <h1 className="text-4xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-3xl font-bold">24K</h2>
          <p className="text-white/60">
            Monthly Visitors
          </p>
        </Card>

        <Card>
          <h2 className="text-3xl font-bold">$82K</h2>
          <p className="text-white/60">
            Revenue
          </p>
        </Card>

        <Card>
          <h2 className="text-3xl font-bold">87%</h2>
          <p className="text-white/60">
            Retention Rate
          </p>
        </Card>
      </div>

      <Card>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8b5cf6"
              />

              <CartesianGrid stroke="#374151" />

              <XAxis dataKey="month" />

              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar
                dataKey="users"
                fill="#06b6d4"
              />

              <CartesianGrid stroke="#374151" />

              <XAxis dataKey="month" />

              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}