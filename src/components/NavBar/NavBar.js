import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contactImage.png"


const NavBar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'></img>
            <div className="components">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="componentsList">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="componentsList">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="componentsList">Skills</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="componentsList">Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="componentsList">Projects</Link>
            </div>
            
            <button className="nav-button">
                <img src={contactImg} alt="" className='contact-img'></img><span>Contact Me</span></button>
        </nav>
    )
}

export default NavBar;
