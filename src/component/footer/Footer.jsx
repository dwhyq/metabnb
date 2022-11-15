import React from "react";
import footer_logo from "../../images/footlogo.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { RiCopyrightLine } from "react-icons/ri";
import "./Footer.css"


const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="footer_div_1">
          <img src={footer_logo} alt="logo" className="nav-logo" />
          <div className="social_icons">
            <div className="icons">
              <GrFacebookOption />
              <FiTwitter />
              <GrInstagram />
            </div>
            <span className="copyright_text">
              <RiCopyrightLine /> 2022 Metabnb
            </span>
          </div>
        </div>
        <div className="footer_div_2">
          <h3>Community</h3>
          <a href="/">NFT</a>
          <a href="/">Tokens</a>
          <a href="/">Landlord</a>
          <a href="/">Discord</a>
        </div>
        <div className="footer_div_3">
          <h3>Places</h3>
          <a href="/">Castle</a>
          <a href="/">Farms</a>
          <a href="/">Beach</a>
          <a href="/">Learn more</a>
        </div>
        <div className="footer_div_4">
          <h3>About us</h3>
          <a href="/">Road maps</a>
          <a href="/">Creators</a>
          <a href="/">Career</a>
          <a href="/">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
