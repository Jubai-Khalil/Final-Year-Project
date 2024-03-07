import Contact from "../models/ContactSchema.js";

// post contact form
export const addContactForm = async (req, res) => {
  const { email, name, message, subject } = req.body;

  try {
    const newContact = new Contact({
      email,
      name,
      message,
      subject,
    });

    await newContact.save();

    return res.status(200).json({
      success: true,
      message: "Contact created successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get contact forms
export const getContactForms = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res
      .status(200)
      .json({ succes: true, message: "Contact forms found", data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
