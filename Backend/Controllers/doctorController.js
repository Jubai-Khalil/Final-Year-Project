import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

// function to update a doctor's details.
export const updateDoctor = async (req, res) => {
    const id = req.params.id
    try {
        // Update the doctor with the given ID using data from the request body.
        // The 'new: true' option returns the updated document.
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        // Send a successful response with the updated doctor's data.
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedDoctor })
    } catch (error) {
        // Send an error response if the update fails.
        res.status(500).json({ success: false, message: "Failed to update" })
    }
};

// function to delete a doctor.
export const deleteDoctor = async (req, res) => {
    const id = req.params.id
    try {
        // Delete the doctor with the given ID.
        await Doctor.findByIdAndDelete(id,);
        // Send a successful response after deletion.
        res.status(200).json({ success: true, message: 'Deleted Successfully' });
    } catch (error) {
        // Send an error response if the deletion fails.
        res.status(500).json({ success: false, message: "Failed to delete" })
    }
}

//  function to get a single doctor's details.
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id
    try {
        // Find the doctor with the given ID and populate the data with the reviews.
        const doctor = await Doctor.findById(id).populate("reviews").select("-password")
        // Send a successful response with the found doctor's data.
        res.status(200).json({ success: true, message: "Successfully found doctor", data: doctor })
    } catch (error) {
        // Send an error response if no doctor is found.
        res.status(404).json({ success: false, message: "No doctor found" })
    }
};

// function to get all doctors.
export const getAllDoctors = async (req, res) => {

    try {
        // search for doctors using the query in a case-insensitive manner.
        // filters doctors by name or specialization if they are approved.
        const { query } = req.query
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [{ name: { $regex: query, $options: "i" } }, { specialization: { $regex: query, $options: "i" } }]
            }).select("-password");
        }
        else {
            // If no query is present, get all doctors excluding their password field.
            doctors = await Doctor.find({}).select("-password");
        }

        // Send a successful response with the list of doctors.
        res.status(200).json({ success: true, message: "Successfully found all doctors", data: doctors })
    } catch (error) {
        // Send an error response if no doctors are found.
        res.status(404).json({ success: false, message: "No doctors found" })
    }
};