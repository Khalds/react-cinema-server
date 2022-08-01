const { Router } = require("express");
const { ratingsController } = require("../controllers/Rating.controller");

const router = Router();

router.patch("/users/:id", userController.patchController);
router.delete("/users/:id", userController.deleteController);
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.userRegistrationController
)
router.post("/logout", userController.logout)
router.post("/login", userController.login)
router.get("/activated/:link", userController.activateController)
router.get("/refresh", userController.refresh)
router.get("/getUsers/:id", authMiddleware, userController.getUsers)


router.get("/reviews", reviewsController.getAllReviews);
router.post("/review", reviewsController.postReview);
router.patch("/review/:id", reviewsController.patchReviewById);
router.delete("/review/:id", reviewsController.delReviewById);

module.exports = router;
