const mongoose = require("mongoose");

// Define the article schema
const articleSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

// Define the parent schema
const parentSchema = new mongoose.Schema({
  status: String,
  totalResults: Number,
  articles: [articleSchema],
});

module.exports = mongoose.model("Parent", parentSchema);


