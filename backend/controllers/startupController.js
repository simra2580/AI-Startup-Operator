const asyncHandler = require("express-async-handler");
const Startup = require("../models/Startup");

// @desc Create startup
// @route POST /api/startups
// @access Private
const createStartup = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    industry,
    fundingNeeded,
    pitchDeckUrl,
  } = req.body;

  const startup = await Startup.create({
    title,
    description,
    industry,
    fundingNeeded,
    founder: req.user._id,
    pitchDeckUrl,
  });

  res.status(201).json(startup);
});

// @desc Get all startups
// @route GET /api/startups
// @access Public
const getStartups = asyncHandler(async (req, res) => {
  const startups = await Startup.find().populate(
    "founder",
    "name email"
  );

  res.json(startups);
});

// @desc Get startup by ID
// @route GET /api/startups/:id
// @access Public
const getStartupById = asyncHandler(async (req, res) => {
  const startup = await Startup.findById(req.params.id).populate(
    "founder",
    "name email"
  );

  if (!startup) {
    res.status(404);
    throw new Error("Startup not found");
  }

  res.json(startup);
});

// @desc Update startup
// @route PUT /api/startups/:id
// @access Private
const updateStartup = asyncHandler(async (req, res) => {
  const startup = await Startup.findById(req.params.id);

  if (!startup) {
    res.status(404);
    throw new Error("Startup not found");
  }

  // Check ownership
  if (startup.founder.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedStartup = await Startup.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedStartup);
});

// @desc Delete startup
// @route DELETE /api/startups/:id
// @access Private
const deleteStartup = asyncHandler(async (req, res) => {
  const startup = await Startup.findById(req.params.id);

  if (!startup) {
    res.status(404);
    throw new Error("Startup not found");
  }

  // Check ownership
  if (startup.founder.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await startup.deleteOne();

  res.json({
    message: "Startup deleted successfully",
  });
});

module.exports = {
  createStartup,
  getStartups,
  getStartupById,
  updateStartup,
  deleteStartup,
};