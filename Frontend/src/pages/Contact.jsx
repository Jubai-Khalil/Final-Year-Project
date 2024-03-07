import { useState } from "react";

import { BASE_URL, token } from "../config";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loading";
import userGetProfile from "../hooks/useFetchData";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendForm = async () => {
    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }
      toast.success("Form Sent");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <div className="space-y-8">
          <div>
            <label htmlFor="name" className="form_label">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleInputChange}
              className="form_input mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleInputChange}
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how we can help you"
              onChange={handleInputChange}
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              name="message"
              id="message"
              placeholder="Leave a comment..."
              onChange={handleInputChange}
              className="form_input mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit" onClick={sendForm}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
