const asyncHandler = require("express-async-handler");

const analyzeIdea = asyncHandler(async (req, res) => {
  const { idea } = req.body;

  const mockResponse = `
Startup Idea Analysis

Idea:
${idea}

Market Potential:
High demand among students and job seekers.

Target Audience:
- College students
- Fresh graduates
- Professionals preparing for interviews

Monetization:
- Subscription plans
- Resume premium templates
- AI interview coaching

Suggestions:
- Add mock interview feature
- Add LinkedIn optimization
- Integrate ATS resume scoring

Validation Score: 89%
`;

  res.json({
    success: true,
    analysis: mockResponse,
  });
});

module.exports = {
  analyzeIdea,
};