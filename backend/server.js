const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// CONNECT DATABASE
connectDB();

// CORS FIX
app.use(
  cors({
    origin: "https://ai-startup-operator.vercel.app",
    credentials: true,
  })
);

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/ai", aiRoutes);

// TEST ROUTE
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend and Backend Connected Successfully",
  });
});

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("AI Startup Operator Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});