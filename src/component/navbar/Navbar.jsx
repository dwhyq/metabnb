import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal && <Modal />}

      <div className="Navbar">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/">Home</Link>
          <Link to="/PlaceToStay"> Place to stay</Link>
          <a href="/contact">NFTs</a>
          <a href="/gallery">Community</a>
        </div>

        <button onClick={toggleModal} className="connect-wallet-btn">
          Connect wallet
        </button>

        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
