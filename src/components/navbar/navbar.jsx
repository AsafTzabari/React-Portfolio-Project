import React, {useState} from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';
function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="navbar">
    <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={600} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={600} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={600} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-20} duration={600} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={50} duration={600} className="desktopMenuListItem">Contact</Link>    
    
     
    </div>
    <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={600} className="listItem"  onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={600} className="listItem"  onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={600} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-20} duration={600} className="listItem"  onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={50} duration={600} className="listItem"  onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
    </nav>
  );
}
export default Navbar;