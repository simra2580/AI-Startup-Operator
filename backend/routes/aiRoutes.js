const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    // STEP 1 → Get IBM Access Token
    const tokenResponse = await axios.post(
      "https://iam.cloud.ibm.com/identity/token",
      new URLSearchParams({
        grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        apikey: process.env.IBM_API_KEY,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // STEP 2 → Call IBM Granite AI
    const response = await axios.post(
      `${process.env.IBM_URL}/ml/v1/text/generation?version=2023-05-29`,
      {
        input: prompt,

        parameters: {
          decoding_method: "greedy",
          max_new_tokens: 1200,
          min_new_tokens: 200,
        },

        model_id: "ibm/granite-3-8b-instruct",

        project_id: process.env.IBM_PROJECT_ID,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const generatedText =
      response.data.results?.[0]?.generated_text ||
      "No response generated.";

    res.json({
      success: true,
      result: generatedText,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "IBM Granite AI failed",
    });
  }
});

module.exports = router;