import React from "react";
import './portfolio.css';
import projectArray from './projectArray';
import Project from './project';
console.log(projectArray);
function createProject(project){
    return(
        <Project
            key={project.key}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            live={project.live}
        />
    );
}
function Portfolio(){
    return(
        <section id="portfolio">
                <h2 className="section-title">My Work</h2>
               <div className="work-list">
               {projectArray.map(createProject)}    
               </div>
        </section>
    )
}
export default Portfolio;