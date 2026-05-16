const investors = [
  {
    name: "StartupX Ventures",
    focus: "AI & SaaS",
    funding: "$50K - $500K",
  },
  {
    name: "FutureSeed Capital",
    focus: "FinTech & HealthTech",
    funding: "$100K - $1M",
  },
  {
    name: "NextGen Angels",
    focus: "Student Startups",
    funding: "$10K - $100K",
  },
];

export default function InvestorHub() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Investor Hub</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {investors.map((investor, index) => (
          <div key={index} className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {investor.name}
            </h2>

            <p className="mb-2">
              <span className="font-bold">Focus:</span>{" "}
              {investor.focus}
            </p>

            <p className="mb-6">
              <span className="font-bold">Funding:</span>{" "}
              {investor.funding}
            </p>

            <button className="btn-primary w-full">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}