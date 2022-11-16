import React from "react";
import Logo from "./images/Logo.svg";

function Navbar() {
    return (
      <div className='navbarContainer'>
        <div className='navBox'>
            <p className="mountingLogo">
                <img src={Logo} alt="My Logo" />
            </p>
        </div>
        <div className='navBox'>Home</div>
        <div className='navBox'>About Us</div>        
        <div className='navBox'>Contact Us</div>
        <div className='navBox'>Email icon</div>
        <div className='navBox'>Call icon</div>
      </div>
    )
  }
  
  export default Navbar