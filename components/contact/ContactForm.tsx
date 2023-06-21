import React, { useState, useEffect } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/Notification";

async function sendContactData(contactData: {
  email: string;
  name: string;
  message: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessage = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      await sendContactData({
        email: formData.email,
        name: formData.name,
        message: formData.message,
      });
      setRequestStatus("success");

      //reset form data
      setFormData({
        email: "",
        name: "",
        message: "",
      });
    } catch (err: any) {
      setRequestStatus("error");
      setRequestError(err.message as string);
    }
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Message is sending...",
      message: "Your message is on the way",
    };
  } else if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  } else if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError || "",
    };
  }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
