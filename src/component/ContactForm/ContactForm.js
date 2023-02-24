import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import GitHubIcon from "./icon/github.svg";
import ContactIcon from "./icon/contact.svg";
import LinkedinIcon from "./icon/linkedin.svg";
import MailIcon from "./icon/mail.svg";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jv1iuph",
        "template_apr2yr2",
        form.current,
        "WuJ5iHtIcoOHRuqM3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div id="contact">
      <div className="overlay">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h1 className="contact-text">CONTACT ME</h1>
          <input
            className="name-input"
            placeholder="Enter your name"
            type="text"
            name="name"
          />
          <input
            className="email-input"
            placeholder="Enter your email address"
            type="email"
            name="email"
          />
          <textarea
            className="message-input"
            placeholder="Message"
            name="message"
          />
          <input className="send-btn" type="submit" value="Send" />
        </form>
        <div className="info-box">
          <a
            href="https://www.linkedin.com/in/linh-vu-242612267/"
            target="_blank"
            className="info"
          >
            <img className="icon" src={LinkedinIcon} alt="linkedin icon" />
            <p className="info-text">Linh Vu</p>
          </a>
          <a
            href="https://github.com/gigglelink?tab=repositories"
            target="_blank"
            className="info"
          >
            <img className="icon" src={GitHubIcon} alt="github icon" />
            <p className="info-text">gigglelink</p>
          </a>
          <a className="info">
            <img className="icon" src={MailIcon} alt="mail icon" />
            <p className="info-text">linhvu0395@gmail.com</p>
          </a>
          <a className="info">
            <img className="icon" src={ContactIcon} alt="contact icon" />
            <p className="info-text">(+84) 886 886 321</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
