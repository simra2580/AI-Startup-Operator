import { useState } from "react";
import API from "../services/api";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello! I'm your AI Startup Assistant. Ask me anything about your startup idea.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    // Add user message
    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await API.post("/ai/generate", {
  prompt: `
You are an expert startup mentor and business analyst.

Analyze this startup idea professionally:

"${message}"

Give response in this EXACT format:

1. Startup Idea
2. Problem Statement
3. Target Audience
4. Revenue Model
5. MVP Features
6. Market Potential
7. Competitors
8. Growth Strategy
9. Risks
10. Final Recommendation

Rules:
- Keep response concise
- Maximum 500 words
- Professional tone
- Clear formatting
`,
});

      const aiMessage = {
        role: "ai",
        text:
          response.data.result||
          "AI could not generate response properly.",
      };

      // Add AI response
      setChat((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.log(error);

      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Backend connection failed.",
        },
      ]);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <div className="min-h-screen p-8 text-white">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        AI Startup Assistant
      </h1>

      {/* Chat Container */}
      <div className="glass-card p-6 h-[500px] overflow-y-auto space-y-4 rounded-2xl border border-white/10 bg-white/5">

        {chat.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl max-w-[80%] whitespace-pre-wrap ${
              item.role === "user"
                ? "bg-purple-600 ml-auto"
                : "bg-white/10"
            }`}
          >
            {item.text}
          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="bg-white/10 p-4 rounded-2xl max-w-[200px] animate-pulse">
            AI is thinking...
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Ask AI about your startup..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-4 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder:text-gray-400"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>
    </div>
  );
}