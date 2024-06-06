import React from 'react'
import './intro.css';
import bg from '../../assets/header.png';
import { TypeAnimation } from "react-type-animation";
import WorkIcon from '@mui/icons-material/Work';


const Intro = () => {

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Aryan</span> <br /><span className='intro-role'>
                    <TypeAnimation
                    sequence={[
                        "MERN Full Stack Developer",
                        1000,
                        "Technical Content Writer",
                        1000,
                        "Open Source Enthusiast",
                        1000,
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
            /></span></span>
                <p className="introPara">I am a skilled developer with experience </p>
                <a href='https://drive.google.com/file/d/16ibt2pWQN0MnwZsOROAoIOnAfSb69aDc/view?usp=sharing' target='_blank' alt='' rel="noreferrer"><button className="btn"><WorkIcon className='resume-logo'></WorkIcon><span>Download CV</span></button></a>
            </div>
            <img src={bg} alt="" className="bg"></img>
        </section>

    )
}

export default Intro