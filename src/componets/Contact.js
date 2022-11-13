import React from "react";
import shin from "../images/services/shinra.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contactCon">
        <hr className="hr" />
        <h2>About us.</h2>

        <div className="contact__container">
          <div className="contact__container-card">
            <div className="imgg">
              <img src={shin} alt="Sample" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="contact__container-card odd">
            <div className="imgg">
              <img src={shin} alt="Sample" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Contact;
