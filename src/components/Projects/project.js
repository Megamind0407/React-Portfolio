import React from 'react'
import './project.css'
import Img from "../../assets/fitlifehub.jpeg"
import { ExternalLink} from 'lucide-react';
import { Code } from 'lucide-react';
const project = () => {
    return (
        <div className='projects'>
            <div className='title'>Projects</div>
            <div className='btn-group'>
                <button className='btn1'>All</button>
                <button className='btn1'>ReactJs</button>
                <button className='btn1'>NextJs</button>
                <button className='btn1'>MERN</button>
            </div>
            <div className='project-card'>
                <div className='content'>
                    <img src={Img} alt=""></img>
                </div>
                <div className='project-title'>FitLife Hub</div>
                <div className='btns'>
                    <div className='bt1'><span className='text'>ReactJs</span></div>
                    <div className='bt2'><span className='text'>Tailwind</span></div>
                    <div className='bt3'><span className='text'>NodeJs</span></div>
                </div>
                <div className='buttons'>
                    <a href='https://fitlifehub12.netlify.app/' target='_blank' rel="noreferrer">
                        <button className='demo'>
                            <div className='live'>
                                <ExternalLink />
                            </div>
                            <div className='btn-text'>Live</div>
                        </button>
                    </a>
                        <a href='https://github.com/Megamind0407/React-Portfolio.git' target='_blank' rel="noreferrer">
                    <button className='code'>
                        <div className='icon'>
                            <Code />
                        </div>
                        <div className='txt'>Code</div>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default project;
