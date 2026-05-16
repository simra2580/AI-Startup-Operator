const express = require("express");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Connect database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/ai", aiRoutes);

// TEST API ROUTE FOR FRONTEND CONNECTION
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend and Backend Connected Successfully",
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("AI Startup Operator Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});