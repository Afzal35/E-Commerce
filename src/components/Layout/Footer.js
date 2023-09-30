import React from "react";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <h2>Ecomm Store</h2>
        <span className="icon"><BsInstagram /></span>
        <span className="icon"><FiTwitter /></span>
        <span className="icon"><BsFacebook /></span>
        <span className="icon"><BsLinkedin /></span>
      </div>
    </React.Fragment>
  );
};

export default Footer;
