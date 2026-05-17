const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables FIRST
dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Connect Database
connectDB();

const app = express();

// ================= MIDDLEWARE =================

// CORS FIX
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// JSON Middleware
app.use(express.json());

// ================= ROUTES =================

// Test Route
app.get("/", (req, res) => {
  res.send("AI Startup Operator Backend Running");
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend and Backend Connected Successfully",
  });
});

// Main Routes
app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/ai", aiRoutes);

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});