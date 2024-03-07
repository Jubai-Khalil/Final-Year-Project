import express from "express";
import {
  getContactForms,
  addContactForm,
} from "../Controllers/contactController.js";

const router = express.Router({
  mergeParams: true,
});

router.route("/").get(getContactForms).post(addContactForm);

export default router;
