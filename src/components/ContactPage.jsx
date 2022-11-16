import React from "react";
import Maps from './images/Maps.svg';
import Waze from './images/Waze.svg';
import GoogleMaps from './images/GoogleMaps.svg';

function ContactPageMap() {
  return (

 <div class="FormContainer">

  <p className="horzontalLine"></p>
  <h1 className="pageName">Contact Us.</h1>
      
      <div class="MapContainer">
        <h3 className="FUH">Find Us Here.</h3>
        <h3 className="iconDirections">Tap icons for directions</h3>
        <div class="gMapsAPI">
          <img src={GoogleMaps} alt="Google Maps API" />
        </div>

            <div class="gMapsContainer">
            <maps>
              <img src={Maps} alt="GoogleMapsIcon" />
            </maps>
                <p class="mapsIconText">Maps
                  <a href="https://goo.gl/maps/KKEzwQ7LoF3QBrAR7">
                  </a>
                </p>
            </div>

            <div class="wazeContainer">
            <waze>
              <img src={Waze} alt="WazeMapsIcon" />
            </waze>
              <p class="wazeIconText">Waze
                <a href="https://ul.waze.com/ul?ll=-26.14762760%2C28.07975650&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
                </a>
              </p>
            </div>
      </div>

      <div className="Line">
        <p className="verticalLine"></p>
      </div>

          <div class="contactFormContainer">
              {/* <!-- contact form --> */}
              <form>
                {/* <!-- name --> */}
                <h3 className="GIT">Get in Touch.</h3>
                <div class="form-group">
                  <label for="name" className="inputName">Type in your full name:</label>
                  <input type="text" name="name" class="form2-control" id="name" placeholder="Deez Nuts:" />
                </div>

                {/* <!-- Phone Number --> */}
                <div class="form-group">
                  <label for="subject" className="inputNumber">Type in your phone number:</label>
                  <input type="text1" name="subject" class="form2-control1" id="subject" placeholder="+27 65 943 9288" />
                </div>

                {/* <!-- email --> */}
                <div class="form-group">
                  <label for="email" className="inputEmail">Type in your email:</label>
                  <input type="text2" name="email" class="form2-control2" id="email" placeholder="E.g. 'yourname@gmail.com'" />
                </div>

                {/* <!-- message --> */}
                <div class="form-group">
                  <label for="email_body" className="inputMessage">Message (Optional)</label>
                  <textarea class="textarea" id="email_body" rows="5" placeholder="Tell us what you want or need we will tell you why it cannot be." >
                  </textarea>
                </div>

                <button className="sendBtn" type="submit">Send</button>
              </form>
        </div>

  </div>
  
  );
}

export default ContactPageMap;
