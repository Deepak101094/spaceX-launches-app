import React from 'react'
import "../../styles/Navbar.css";
import logo from "../../assets/images/spacexlogo.png";

const index = () => {
    return (
        <div className="navbar">
            <div className="image_container">
              <img src={logo} alt="spaceX" />  
            </div>           
        </div>
    )
}

export default index;
