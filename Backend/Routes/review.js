import express from "express";
import { getAllReviews, createReview, deleteReview/*, deleteReviewsByDoctor, getDoctorsReviews*/} from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../Auth/verifyToken.js";

const router = express.Router({mergeParams: true});

// Route for getting all reviews and creating a new review
router.route("/")
    .get(/*"/", authenticate, restrict(["admin"]),*/getAllReviews)
    .post(authenticate, restrict(["patient"]), createReview);

// Route to delete a specific review
router.delete('/reviews/:reviewId', deleteReview);

/*
// Route to delete all reviews for a doctor
router.delete('/doctor/:doctorId/reviews', deleteReviewsByDoctor);

// Route to get all reviews for a doctor
router.get('/doctors/:doctorId/reviews', getDoctorsReviews);
*/

export default router;
