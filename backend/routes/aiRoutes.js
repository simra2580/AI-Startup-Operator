const express = require("express");

const {
  analyzeIdea,
} = require("../controllers/aiController");

const router = express.Router();

router.post("/analyze", analyzeIdea);

module.exports = router;