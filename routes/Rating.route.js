const { Router } = require("express");
const { ratingsController } = require("../controllers/Rating.controller");

const router = Router();

router.post("/ratings/:id", ratingsController.postRating);

module.exports = router;
