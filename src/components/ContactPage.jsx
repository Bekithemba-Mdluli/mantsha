import React from 'react';
import GoogleMaps from './images/GoogleMaps.svg';

function Content() {
  return (
    <>
          <h1 className="pageName">CONTACT US.</h1>

    <div className='twoContainer'>

      <div className='box1'>
        <div className="form-container">
          <h3 className='titles'>GET IN TOUCH.</h3>
          <form>
            <div className='mapCon'>
              <img className='pic' src={GoogleMaps} alt="Google Maps API" />
            </div>
          </form>
        </div>
      </div>

      <div className='box2'>
        <div className="form-container">
          <h3 className='titles'>CONTACT US.</h3>
          <form>
            <p className="form-group">
              Type in your full name:
            </p>
            <input type="text" name="name" placeholder="Name" />

            <p className="form-group">
              Type in your phone number:
            </p>
            <input type="text" name="subject" placeholder="Number" />

            <p className="form-group">
              Type in your email:
            </p>
            <input type="email" name="email" placeholder="Email" />

            <p className="form-group">
              Message (Optional)
            </p>
            <textarea placeholder="Message" rows="7"></textarea>

            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default Content