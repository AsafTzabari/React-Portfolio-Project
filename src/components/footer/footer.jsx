import React from "react";
import "./footer.css";
let date = new Date();
function Footer(props) {
    return(
        <footer>
            
                <p>© Asaf Tzabari {date.getFullYear()}</p>
            
        </footer>
    );
}

export default Footer;