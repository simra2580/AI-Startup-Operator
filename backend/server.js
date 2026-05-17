const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// LOAD ENV VARIABLES
dotenv.config();

// ROUTES
const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");
const aiRoutes = require("./routes/aiRoutes");

// INITIALIZE EXPRESS
const app = express();

// CONNECT DATABASE
connectDB();

// ======================
// CORS CONFIGURATION
// ======================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-startup-operator.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ======================
// MIDDLEWARE
// ======================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// HEALTH CHECK ROUTES
// ======================

app.get("/", (req, res) => {
  res.send("AI Startup Operator Backend Running");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Frontend and Backend Connected Successfully",
  });
});

// ======================
// API ROUTES
// ======================

app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/ai", aiRoutes);

// ======================
// ERROR HANDLER
// ======================

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ======================
// SERVER
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});