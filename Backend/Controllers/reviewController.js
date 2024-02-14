import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

/*
doesn't work yet
export const getDoctorsReviews = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        // Find reviews where the 'doctor' field matches the provided doctorId
        const reviews = await Review.find({ doctor: doctorId }).populate('user', 'name');
        const filteredReviews = reviews.filter(review => review.doctor === doctorId);

        if (reviews.length > 0) {
            res.status(200).json({ success: true, message: "Successfully found reviews for the doctor", data: reviews });
        } else {
            // If no reviews are found for this doctor
            res.status(404).json({ success: false, message: "No reviews found for this doctor" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching reviews", error: error.message });
    }
};
*/

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({success: true, message: "Successfully found all reviews", data: reviews});
    } catch (error) {
        res.status(404).json({success: false, message: "Reviews Not found", data: reviews});
    }
};

export const createReview = async(req, res) => {
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save()

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: {reviews: savedReview._id},
        });

        res.status(200).json({success: true, message: "Review Submitted", data: savedReview});
    } catch (error) {
        res.status(500).json({success: false, message: error.message });
    }
};

// Function to delete a review.
export const deleteReview = async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
        // Delete the review with the given ID
        await Review.findByIdAndDelete(reviewId);

        // Send a successful response after deletion
        res.status(200).json({ success: true, message: 'Review deleted successfully' });
    } catch (error) {
        // Send an error response if the deletion fails
        res.status(500).json({ success: false, message: "Failed to delete review", error: error.message });
    }
};

/*
doesn't work yet
// Function to delete all reviews for a specific doctor.
export const deleteReviewsByDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        // Delete all reviews associated with the given doctor ID
        const result = await Review.deleteMany({ doctor: doctorId });

        if (result.deletedCount > 0) {
            // If reviews were found and deleted
            res.status(200).json({ success: true, message: 'All reviews for the doctor deleted successfully' });
        } else {
            // If no reviews were found for this doctor
            res.status(404).json({ success: false, message: 'No reviews found for this doctor to delete' });
        }
    } catch (error) {
        // Send an error response if the deletion fails
        res.status(500).json({ success: false, message: "Failed to delete reviews", error: error.message });
    }
};
*/