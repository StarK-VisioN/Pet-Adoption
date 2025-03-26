import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawSome Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach us at{" "}
          <a className="mail-links" href="mailto:niraj.hatote@gmail.com">
          pawsomelife@gmail.com
          </a>
        </p>
        <p>
          
          <a
            className="contact-links"
            href="https://github.com/StarK-VisioN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://api.whatsapp.com/qr/GXRHM7PEPNOKA1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; 2024 PawSome Life , All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
