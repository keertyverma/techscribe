import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        message: formData.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  email: event.target.value,
                }))
              }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  name: event.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                message: event.target.value,
              }))
            }
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit" onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
