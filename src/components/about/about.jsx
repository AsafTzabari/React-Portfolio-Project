import React from "react";
import "./about.css";
import profile2 from "../../assets/profile-img.jpeg";
function About(){
    return(
        <section id="about" className="about">
   
  
          <div className="container">
          <div className="section-title">
                  <h2>About me</h2>
              </div>
              <img src={profile2} className="profile-pic-2" alt="profile-pic-2"/>
             
                <div class="list-1">
                  <ul>
                    <li><strong>Birthday:</strong> <span>25 October 1998</span></li>
                    <li><strong>Phone:</strong> <span>054-976-0749</span></li>
                    <li><strong>City:</strong> <span>Tel Aviv District, Israel</span></li>
                  </ul>
                </div>
                <div className="list-2">
                  <ul>
                    <li> <strong>Age:</strong> <span>25</span></li>
                    <li> <strong>Education:</strong> <span>Computer Science Degree</span></li>
                    <li><strong>Email:</strong> <span>asafzabary@gmail.com</span></li>
                    
                  </ul>
                </div>
              
              <p className="descriptionParag">
                Passionate web developer, open to job offers in additional technologies and languages, Seeking new opportunities to leverage my extensive expertise in web development to create innovative and user-friendly digital solutions. Passionately driven by a desire to continuously expand my knowledge and skillset.
              </p>
              </div>

      </section>
    );
}
export default About;