"use client";

import { useState } from "react";

import "./contact.scss";
import { AppWrap, MotionWrap } from "../wrapper";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      return setError("Please provide valid credential");
    } else {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsFormSubmitted(true);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <Image src={"/email.png"} alt="email" width={1000} height={1000} />
          <Link href="mailto:imtiaz.array@gmail.com" className="p-text">
            imtiaz.array@gmail.com
          </Link>
        </div>
        <div className="app__footer-card">
          <Image src={"/mobile.png"} alt="mobile" width={1000} height={1000} />
          <Link href="tel:+880 1323 125 153 " className="p-text">
            +880 1323 125 153
          </Link>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <span>{error}</span>

          <button type="button" className="p-text" onClick={handleClick}>
            Send Message
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch.⚡</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "Contact",
  "app__whitebg"
);
