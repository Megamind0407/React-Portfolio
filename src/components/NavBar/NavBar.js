import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { useState,useEffect } from 'react';
import contactImg from "../../assets/contactImage.png"

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showMenu]);

    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'></img>
            <div className="components">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={900} className="componentsList">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={900} className="componentsList">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={900} className="componentsList">Skills</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-40} duration={900} className="componentsList">Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={900} className="componentsList">Projects</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={900} >
            <button className="nav-button">
                <img src={contactImg} alt="" className='contact-img'></img><span>Contact Me</span>
            </button>
            </Link>
            <div className="menu-grid" onClick={toggleMenu}>
                <IoMenu />
            </div>
            {showMenu && (
                <div className={showMenu ? 'links show-links' : 'links'}>
                <Link to="intro" onClick={closeMenu} offset={-60} >Home</Link>
                <Link to="about" onClick={closeMenu} offset={-30}>About</Link>
                <Link to="skills" onClick={closeMenu} offset={-40}>Skills</Link>
                <Link to="experience" onClick={closeMenu} offset={-40}>Experience</Link>
                <Link to="projects" onClick={closeMenu} offset={-50}>Projects</Link>
                <Link to="contact" onClick={closeMenu} offset={-40}>Contact</Link>
            </div>
            )}
        </nav>
    )
}
export default NavBar;
