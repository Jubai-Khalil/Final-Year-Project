import { updateUser, deleteUser, getAllUsers, getSingleUser } from "../Controllers/userController.js";
import express from 'express';
import {authenticate, restrict} from "../Auth/verifyToken.js"
const router = express.Router()

// Define a GET route to fetch a single user by ID.
router.get("/:id",authenticate, restrict(["patient"]), getSingleUser)

// Define a GET route to fetch all users.
router.get("/", authenticate, restrict(["admin"]), getAllUsers)

// Define a PUT route to update a user by ID.
router.put("/:id", authenticate, restrict(["patient"]), updateUser)

// Define a DELETE route to delete a user by ID.
router.delete("/:id",authenticate, restrict(["patient"]), deleteUser)

export default router