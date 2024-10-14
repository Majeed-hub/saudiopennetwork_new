import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
 
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">
            Our organization is active across various social media platforms.
            Feel free to reach out to us, and we will respond within 24 hours.
            We are here to assist you with Machine Learning, Artificial
            Intelligence, React development, and Cloud Computing or
            Infrastructure solutions.
          </p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Saad Working"
            src={require("../../assests/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
