import React from 'react'
import "../../styles/Navbar.css";
import logo from "../../assets/images/spacex-logo-png.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="image_container">
              <img src={logo} alt="spaceX" />  
            </div>           
        </div>
    )
}

export default Navbar;
