const mongoose = require("mongoose");

const Data = new mongoose.Schema({
  end_year: {
    type: String,
  },
  intensity: {
    type: Number,
    min: [0, "Intensity must be a non-negative number"],
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: String,
  impact: String,
  added: {
    type: Date,
  },
  published: {
    type: Date,
  },
  country: {
    type: String,
  },
  relevance: {
    type: Number,
    min: [0, "Relevance must be a non-negative number"],
  },
  pestle: {
    type: String,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
  },
  likelihood: {
    type: Number,
    min: [0, "Likelihood must be a non-negative number"],
  },
});

module.exports = mongoose.model("Data", Data);
