import express from "express";
import { register, login } from "../Controllers/authController.js";

const router = express.Router();

// Define a POST route for '/register'. 
router.post("/register", register);
// Define a POST route for '/login' which calls the 'login' function in the 'authController.js' file.
router.post("/login", login);

export default router;