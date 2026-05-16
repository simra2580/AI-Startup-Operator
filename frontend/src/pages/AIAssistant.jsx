import { useState } from "react";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello! I'm your AI Startup Assistant. Ask me anything about your startup idea.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newChat = [
      ...chat,
      { role: "user", text: message },
      {
        role: "ai",
        text: `AI Suggestion for "${message}" : Focus on solving a real user problem and validate your audience early.`,
      },
    ];

    setChat(newChat);
    setMessage("");
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">AI Assistant</h1>

      <div className="glass-card p-6 h-[500px] overflow-y-auto space-y-4">
        {chat.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl max-w-[80%] ${
              item.role === "user"
                ? "bg-purple-600 ml-auto"
                : "bg-white/10"
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <input
          type="text"
          placeholder="Ask AI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
        />

        <button onClick={sendMessage} className="btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}