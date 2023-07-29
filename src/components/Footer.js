import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
               <FaHome  size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
               <div>
                 <p>H/44 T.K.ENTERPRIZE</p>
                 <p>Baghajotin,Kolkata</p>
               </div>
            </div>
            <div className="phone">
            <h4> <FaPhone  size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
            993884949</h4>
            </div>
            <div className="email">
            <h4> <FaMailBulk  size={20} style={{ color: "#fff",
             marginRight: "2rem"}}/>
            info@gmail.com</h4>

            </div>
          </div>

          <div className="right">
            <h4>About Me hello </h4>
            <p>This is me Subhadip De.I am a full stack web Developer
                love to create web application and explore.
            </p>
            <div className="social">
            <FaFacebook  size={30} style={{ color: "#fff",
             marginRight: "1rem"}}/>
              <FaTwitter  size={30} style={{ color: "#fff",
             marginRight: "1rem"}}/>
              <FaLinkedin  size={30} style={{ color: "#fff",
             marginRight: "1rem"}}/>
                

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer