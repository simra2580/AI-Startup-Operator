const express = require("express");

const {
  createStartup,
  getStartups,
  getStartupById,
  updateStartup,
  deleteStartup,
} = require("../controllers/startupController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create startup + Get all startups
router
  .route("/")
  .post(protect, createStartup)
  .get(getStartups);

// Get startup by ID + Update + Delete
router
  .route("/:id")
  .get(getStartupById)
  .put(protect, updateStartup)
  .delete(protect, deleteStartup);

module.exports = router;