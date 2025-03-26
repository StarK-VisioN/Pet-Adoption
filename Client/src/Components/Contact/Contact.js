import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:niraj.hatote@gmail.com">
          pawsomelife@gmail.com
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/StarK-VisioN">
          pawsomelife-project
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+56488551655">
          +91 9874561230
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
