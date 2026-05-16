const asyncHandler = require("express-async-handler");

const {
  analyzeStartupIdea,
} = require("../services/aiService");

const analyzeIdea = asyncHandler(async (req, res) => {
  const { idea } = req.body;

  if (!idea) {
    res.status(400);
    throw new Error("Idea is required");
  }

  const result = await analyzeStartupIdea(idea);

  res.json({
    analysis: result,
  });
});

module.exports = { analyzeIdea };