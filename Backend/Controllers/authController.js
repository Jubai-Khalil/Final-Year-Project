import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

// function to generate a JWT token for a user.
const generateToken = user => {
    // Signing a new token with the user's ID and role, using the secret key from the environment variables.
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1000d", // Setting the token to expire in 1000 days.
    });
};

// Export the 'register' function to handle user registration requests.
export const register = async (req, res) => {
    const { email, password, firstname, surname, dob, role, photo, gender } = req.body;

    try {
        // Determining the model (User or Doctor) based on the role provided in the request.
        const Model = role === "patient" ? User : Doctor;

        // Check if user exists.
        let user = await Model.findOne({ email });
        if (user) {
            // If user exists, send a 400 status response.
            return res.status(400).json({ message: "User already exists" });
        }

        // Generating a salt for password hashing.
        const salt = await bcrypt.genSalt(10);
        // Hashing the password 
        const hashPassword = await bcrypt.hash(password, salt);

        // Create a new user instance with the provided details.
        user = new Model({
            firstname, surname, email, dob, password: hashPassword, photo, gender, role
        });

        // Saving the new user to the database.
        await user.save();

         // the user response object.
        const userResponse = {
            id: user._id, firstname: user.firstname, surname: user.surname, email: user.email, role: user.role
        };

        // Sending a success response with the user details.
        res.status(200).json({ success: true, message: "User successfully created", userResponse });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create User", error });
    }
};

// Exporting the 'login' function to handle user login requests.
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Finding a user in either the User or Doctor collection based on the provided email.
        const user = await User.findOne({ email }) || await Doctor.findOne({ email });

        // Check if user exists.
        if (!user) {
             // If user does not exist, send a 400 status response.
            return res.status(400).json({ message: "User not found" });
        }

        // Comparing the provided password with the stored hashed password.
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ status: false, message: 'Password is not correct' });
        }

        // Generate a token for the user.
        const token = generateToken(user);

        // Exclude password and appointments (and any other unnecessary fields) from the response.
        const { password: _, appointments: __, ...rest } = user._doc;
        // Send a success response with the user details and token.
        res.status(200).json({ status: true, message: "Successfully logged in", token, data: { ...rest }, id: user.id, role: user.role });

    } catch (error) {
         // Send a 500 status response in case of any errors.
        res.status(500).json({ status: false, message: "Failed to log in" });
    }
};
