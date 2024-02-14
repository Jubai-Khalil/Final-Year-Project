import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

// Schema for reviews.
const reviewSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: "Doctor",
            //required: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            //required: true
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
        },
    },
    { timestamps: true }
);

// operation to automatically populate user data.
reviewSchema.pre(/^find/, function(next) {
    this.populate({
        path: "user",
        select: "name photo",
    });
    next();
});

// method to calculate average ratings for a doctor.
reviewSchema.statics.calcAverageRatings = async function(doctorId) {
    try {
        const stats = await this.aggregate([
            { $match: { doctor: doctorId } },
            { $group: { _id: "$doctor", numOfRatings: { $sum: 1 }, avgRating: { $avg: "$rating" } } }
        ]);
        
        if (stats.length > 0) {
            await Doctor.findByIdAndUpdate(doctorId, {
                totalRating: stats[0].numOfRatings,
                averageRating: stats[0].avgRating,
            });
        } else {
            // Reset ratings if there are no reviews
            await Doctor.findByIdAndUpdate(doctorId, {
                totalRating: 0,
                averageRating: 0,
            });
        }
    } catch (error) {
        console.error('Error calculating average ratings:', error);
    }
};

// hook to update doctor's ratings after a review is saved.
reviewSchema.post("save", function() {
    this.constructor.calcAverageRatings(this.doctor);
});

export default mongoose.model("Review", reviewSchema);
