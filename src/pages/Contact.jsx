import { useState } from "react";
import axios from "axios";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    object: "",
    message: "",
    responseMessage: ""
  });

  const {
    email,
    object,
    message,
    responseMessage 
    } = formData; 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/travail-perso/kaela-couture/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({
        email: "",
        object: "",
        message: "",
        responseMessage: response.data.message || "No message returned"
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h1>Contact me</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="object">Object</label>
        <input
          id="object"
          type="text"
          name="object"
          value={object}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
  
    </div>
  );
};

export default Contact;
