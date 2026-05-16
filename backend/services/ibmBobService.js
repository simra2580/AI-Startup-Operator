const axios = require("axios");

const simulateStartup = async (startupData) => {
  const { idea } = startupData;

  const prompt = `
You are an AI Startup Business Analyst.

Analyze this startup idea:

"${idea}"

Give:
1. Revenue prediction
2. Risk analysis
3. Market potential
4. Competitor reaction
5. Business recommendations
6. Success probability

Return clean professional analysis.
`;

  try {
    // STEP 1: Get IAM Token
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

    // STEP 2: Send Prompt to IBM Granite
    const response = await axios.post(
      "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29",
      {
        input: prompt,

        model_id: "ibm/granite-13b-chat-v2",

        project_id: process.env.IBM_PROJECT_ID,

        parameters: {
          decoding_method: "greedy",
          max_new_tokens: 400,
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

    return response.data.results[0].generated_text;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw new Error("IBM AI analysis failed");
  }
};

module.exports = { simulateStartup };