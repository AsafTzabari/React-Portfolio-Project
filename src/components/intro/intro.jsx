import React from "react";
import {Link} from 'react-scroll';
import "./intro.css";
import profilePicture from "../../assets/profilePic.png";
import cv from "../../assets/Asaf's-CV.pdf";

function Intro() {
    const downloadCV = () => {
        // Replace 'your_cv.pdf' with the actual path to your CV file
        const cvPath = "../../assets/Asaf's-CV.pdf";
        window.location.href = cvPath;
      };
    return(
        <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Asaf</span><br/>Software Developer</span>
            <p className="introPara">I am a skilled software developer with experience</p>
            <a href={cv} download>
          <button className="btn">My Resume</button>
        </a>
        </div>
        <img src={profilePicture} alt="profile Picture" className="profilePicture"/>
        </section> 
    );
}
export default Intro;