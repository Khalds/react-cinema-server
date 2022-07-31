const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  description: String,
  length: String,
  limitation: Number,
  country: String,
  img: String,

  ratings: [
    {
      rate: Number,
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
  genre: [
    {
      ref: "Genre",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],

  rating: {
    type: Number,
    default: 0,
  },

  img_slider: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
