import React from "react";
import shin from "../images/services/cons.jpg";

import "./AboutUs.css";

function aboutus() {
  return (
    <div className="aboutus" id="aboutus">
      <div className="aboutusCon">
        <hr className="hr" />
        <h2>About us.</h2>

        <div className="aboutus__container">
          <div className="aboutus__container-card">
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

          <div className="aboutus__container-card odd">
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

export default aboutus;
