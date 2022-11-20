import React from 'react';
import { Component } from 'react';
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import './Navbar.css';
import logo from './Images/logo.png';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav>
                {/* an 'a href' link with manstha logo */}
                <a href='/'><img src={logo} alt="logo" id="mantshaLogo"/></a>
                <div>
                    {/* navigation links below */}
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#email"><MdEmail /></a></li>
                        <li><a href="#call"><MdCall /></a></li>
                    </ul>
                </div>
                {/* Hamburger menu will appear when changed to mobile device */}
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        )
    }
}
export default Navbar;