import React from "react";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

function Main() {
    return(
        <>
            <div className="profile-container">
                <h2>Joe</h2>
                <p>FrontEnd Software Engineer</p>
                <a>www.getjoemumo.tech</a>
            </div>
            <div className="btn-container">
                <a href="">
                <button id="email" href="mailto: josephmumo25@gmail.com">
                    <img src={email} alt="em" />
                    Email
                </button>
                </a>
                <a href="https://www.linkedin.com/in/joseph-mumo-745946175/">
                <button id="in">
                    <img src={linkedin} alt="in" />
                    LinkedIn
                </button>
                </a>
            </div>
            <div className="desc-container">
                <h3>About</h3>
                <p>I'm a creative in tech industry.
                     Front-end web developer naturally curious, attentive to details 
                     and perpetually working on improving my skills.
                </p>
                <h3>Interests</h3>
                <p>Car lover, Overlanding and camping fanatic. Drill culture ninja. Music scolar. Food expert.</p>
            </div>
        </>
    )
}
export default Main;