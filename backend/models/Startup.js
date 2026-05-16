const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Startup title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },

    industry: {
      type: String,
      required: [true, "Industry is required"],
      trim: true,
      enum: {
        values: [
          "AI / Machine Learning",
          "FinTech",
          "HealthTech",
          "EdTech",
          "E-Commerce",
          "SaaS",
          "CleanTech",
          "Web3 / Blockchain",
          "Cybersecurity",
          "Other",
        ],
        message: "{VALUE} is not a supported industry",
      },
    },

    fundingNeeded: {
      type: Number,
      required: [true, "Funding amount is required"],
      min: [1, "Funding needed must be greater than 0"],
    },

    founder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Founder reference is required"],
    },

    pitchDeckUrl: {
      type: String,
      trim: true,
      match: [
        /^https?:\/\/.+/,
        "Pitch deck URL must be a valid URL starting with http or https",
      ],
      default: null,
    },
  },
  {
    timestamps: true, // auto-manages createdAt and updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Index for efficient queries by founder and industry
startupSchema.index({ founder: 1 });
startupSchema.index({ industry: 1 });
startupSchema.index({ createdAt: -1 });

// Virtual: formatted funding label (e.g. "$1,200,000")
startupSchema.virtual("fundingLabel").get(function () {
  return `$${this.fundingNeeded.toLocaleString("en-US")}`;
});

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;