import React, { useState } from "react";
import modalMask from "../../images/modalmask.png";
import modalConnect from "../../images/modalconnect.png";
import { MdClose } from "react-icons/md";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      {!modal && (
        <div className="wrapper">
          <div className="overlay"></div>
          <div id="modal">
            <div className="modal_head">
              <h3>Connect Wallet</h3>
              <button onClick={toggleModal} className="mdClose">
                <MdClose />
              </button>
            </div>

            <div className="wallet_types">
              <p>Choose your preferred wallet:</p>
              <img src={modalMask} alt="first_wallet" />
              <img src={modalConnect} alt="second_wallet" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
