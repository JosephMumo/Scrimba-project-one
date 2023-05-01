import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

function Footer() {
    return(
        <div className="footer-container">
            <img src={twitter} alt="1" />
            <img src={facebook} alt="2" />
            <img src={instagram}  alt="3" />
            <img src={github} alt="4" />
        </div>
    )
};
export default Footer;
