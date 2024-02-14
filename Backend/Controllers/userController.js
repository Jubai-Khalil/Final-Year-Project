import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

// helper function to handle HTTP responses.
const handleResponse = (res, success, status, message, data = null) => {
    // Send a JSON response with the given parameters.
    res.status(status).json({ success, message, ...(data ? { data } : {}) });
};

// function to update a user.
export const updateUser = async (req, res) => {
    try {
        // Update the user with the given ID using data from the request body.
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        // Call handleResponse to send a success response with the updated user data.
        handleResponse(res, true, 200, "Successfully updated", updatedUser);
    } catch (error) {
        // On error, send a failure response.
        handleResponse(res, false, 500, "Failed to update");
    }
};

// function to delete a user.
export const deleteUser = async (req, res) => {
    try {
        // Delete the user with the given ID.
        await User.findByIdAndDelete(req.params.id);
        // Send a success response indicating the user was deleted.
        handleResponse(res, true, 200, "Deleted Successfully");
    } catch (error) {
        // On error, send a failure response.
        handleResponse(res, false, 500, "Failed to delete");
    }
};

// function to get a single user.
export const getSingleUser = async (req, res) => {
    try {
        // Find the user with the given ID.
        const user = await User.findById(req.params.id);
        // Send a success response with the found user data.
        handleResponse(res, true, 200, "Successfully found user", user);
    } catch (error) {
        // On error, send a failure response.
        handleResponse(res, false, 404, "No user found");
    }
};

//  function to get all users.
export const getAllUsers = async (req, res) => {
    try {
        // Find all users in the database.
        const users = await User.find({});
        // Send a success response with the list of all users.
        handleResponse(res, true, 200, "Successfully found all users", users);
    } catch (error) {
        // On error, send a failure response.
        handleResponse(res, false, 404, "No users found");
    }
};