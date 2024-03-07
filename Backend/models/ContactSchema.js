import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String },
  subject: { type: String },
});

export default mongoose.model("Contact", ContactSchema);
