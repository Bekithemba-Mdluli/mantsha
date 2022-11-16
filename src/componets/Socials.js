import React from "react";

import "./Socials.css";

import linkedin from "../images/icons/icon-linkedin.svg";
import facebook from "../images/icons/icon-facebook.svg";
import whatsapp from "../images/icons/icon-whatsapp.svg";

function Socials() {
  return (
    <div className="socials">
      <div className="socials__item fb">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook Icon" />
        </a>
      </div>
      <div className="socials__item li">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linked In Icon" />
        </a>
      </div>
      <div className="socials__item wa">
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp Icon" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
