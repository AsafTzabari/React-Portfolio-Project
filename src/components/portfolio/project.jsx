import React from "react";
import githubIcon from '../../assets/github-icon.svg';
import linkIcon from '../../assets/link-icon.svg';
function Project(props){
    console.log(props.image);
    const imagePath = require(`../../assets/${props.image}`);
    return(
        <div className="work-item">
                          <img src= {imagePath} alt="project"/>
                          <div className="work-details">
                          <h3>{props.title}</h3>
                          <p>{props.description}</p>
                          <div className="work-links">
                          <a href={props.github} className="link-item"><img src={githubIcon} alt="github icon"/></a>
                          <a href={props.live} className="link-item"><img src={linkIcon} alt="link-icon"/></a>
                             </div>
                          </div>
                     </div>
    );
}

export default Project;