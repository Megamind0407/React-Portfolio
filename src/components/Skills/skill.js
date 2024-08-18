import React from 'react'
import './skill.css';
import Cpp from "../../assets/skills/icons8-c++.svg"
import Python from "../../assets/skills/icons8-python.svg"
import Java from "../../assets/skills/icons8-java.svg"
import Html from "../../assets/skills/icons8-html.svg"
import Css from "../../assets/skills/icons8-css.svg"
import Javascript from "../../assets/skills/icons8-javascript.svg"
import Reactlogo from "../../assets/skills/icons8-react-native.svg"
import Tailwind from "../../assets/skills/icons8-tailwind-css.svg"
import Bootstrap from "../../assets/skills/Bootstrap_logo.svg"
import Nodejs from "../../assets/skills/icons8-nodejs.svg"
import Express from "../../assets/skills/icons8-express-js.svg"
import Django from "../../assets/skills/django.svg"
import Mongodb from "../../assets/skills/mongodb.png"
import Firebase from "../../assets/skills/icons8-firebase.svg"
import Postgre from "../../assets/skills/icons8-postgresql.svg"
import mysql from "../../assets/skills/mysql-svgrepo-com.svg"
import aws from "../../assets/skills/Amazon_Web_Services_Logo.svg"

const Skills = () => {
    return (
        <div className='skills'>
            <div className='skill-tag'>Skills</div>
            <div className='skill-cards'>
                <div className='card'>
                    <span>Core Languages</span>
                    <div className='icons'>
                        <img src={Cpp} alt=" " />
                        <img src={Python} alt=" " />
                        <img src={Java} alt=" " />
                    </div>
                </div>
                <div className='card'>
                    <span>Frontend</span>
                    <div className='icons'>
                        <img src={Html} alt=" " />
                        <img src={Css} alt=" " />
                        <img src={Javascript} alt=" " />
                        <img src={Reactlogo} alt=" " />
                        <img src={Tailwind} alt=" " />
                        <img src={Bootstrap} alt=" " style={{height:40, width:50}}/>
                    </div>
                </div>
                <div className='card'>
                    <span>Backend</span>
                    <div className='icons'>
                        <img src={Nodejs} alt=" " />
                        <img src={Express} alt=" " />
                        <img src={Django} alt=" "  style={{height:40, width:50}}/>
                    </div>
                </div>
                <div className='card'>
                    <span>Databases</span>
                    <div className='icons'>
                        <img src={Mongodb} alt=" " />
                        <img src={Firebase} alt=" " />
                        <img src={Postgre} alt=" " />
                        <img src={mysql} alt=" " style={{height:40,width:50}}/>
                        <img src={aws} alt=" " style={{height:50,width:50}}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Skills