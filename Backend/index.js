import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./Routes/auth.js"
import userRouter from "./Routes/user.js"
import docRouter from "./Routes/doctor.js"
import reviewRouter from "./Routes/review.js"

// Load environment variables from .env file
dotenv.config();

const app = express();
let port = process.env.PORT || 8000;
const corsOptions = { origin: true };

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("Api is working"));

// Add routers for different paths - these handle specific routes for authentication, users, and doctors.
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/doctors", docRouter);
app.use("/api/v1/reviews", reviewRouter);

// function to start the server.
async function startServer() {
    try {
        // Attempt to connect to the database 
        console.log("Attempting to connect to database...");
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successfully");

        // Start listening for requests after a successful database connection
        app.listen(port, () => console.log(`Server running on port ${port}`)).on('error', (e) => {
            // Handle error where port is already in use
            if (e.code === 'EADDRINUSE') {
                console.log(`Port ${port} is in use, trying another port.`);
                const newPort = Number(port) + 1;
                app.listen(newPort, () => {
                    console.log(`Server running on port ${newPort}`);
                });
            }
        });
    } catch (err) {
        // Log any errors connecting to the database and exit
        console.error("MongoDB database connection failed:", err.message);
        process.exit(1);
    }
}

// Starting the server.
startServer();

// Handle any unhandled promise rejections in the application.
process.on('unhandledRejection', err => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

export default app
