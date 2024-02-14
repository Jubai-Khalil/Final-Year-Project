import { updateDoctor, deleteDoctor, getAllDoctors, getSingleDoctor } from "../Controllers/doctorController.js";
import express from 'express';
import {authenticate, restrict} from "../Auth/verifyToken.js"
import reviewRouter from "./review.js"

const router = express.Router()

router.use("/:doctorId/reviews", reviewRouter)

// Define a GET route that fetches a single doctor by ID. 
router.get("/:id", authenticate, restrict(["doctor"]), getSingleDoctor)

// Define a GET route that fetches all doctors. 
router.get("/", authenticate, restrict(["admin"]), getAllDoctors)

// Define a PUT route to update a doctor's information by ID.
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor)

// Define a DELETE route to delete a doctor by ID.
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor)


export default router