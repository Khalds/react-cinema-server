const Movie = require("../models/Movie.model");

module.exports.ratingsController = {
  postRating: async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            ratings: {
              rate: req.body.rate,
              user: req.body.user,
            },
          },
        },
        { new: true }
      );

      return res.json(movie);
    } catch (e) {
      res.json(e.message);
    }
  },
};
