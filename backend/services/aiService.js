const axios = require("axios");

const analyzeStartupIdea = async (idea) => {
  try {
    // STEP 1: Get IBM IAM Access Token
    const tokenResponse = await axios.post(
      "https://iam.cloud.ibm.com/identity/token",
      `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${process.env.IBM_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // STEP 2: Send request to IBM watsonx AI
    const response = await axios.post(
      "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29",
      {
        input: `
You are an AI Startup Business Analyst.

Analyze this startup idea:

"${idea}"

Give:
1. Strengths
2. Weaknesses
3. Opportunities
4. Risks
5. Suggestions
6. Success Probability

Return clean professional analysis.
        `,

        model_id: "ibm/granite-3-8b-instruct",

        project_id: process.env.IBM_PROJECT_ID,

        parameters: {
          decoding_method: "greedy",
          max_new_tokens: 300,
          repetition_penalty: 1,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data?.results?.[0]?.generated_text;
  } catch (error) {
    console.log(
      "IBM ERROR:",
      error.response?.data || error.message
    );

    throw new Error("IBM AI analysis failed");
  }
};

module.exports = { analyzeStartupIdea };