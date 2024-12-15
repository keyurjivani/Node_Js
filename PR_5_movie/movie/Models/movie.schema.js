const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
  category: String,
  actors: [{ name: String }],
  image: String,
  ratings: [
    {
      value: {
        type: Number,  // Ensure that `value` is a `Number`
        min: 0,        // Min value for `ratings`
        max: 10,       // Max value for `ratings`
      },
    },
  ],
  comments: [
    {
      text: String,
    },
  ],
  addedBy: String,
});

const movie = mongoose.model('Movie', movieSchema);  // Changed 'User' to 'Movie'
module.exports = movie;
