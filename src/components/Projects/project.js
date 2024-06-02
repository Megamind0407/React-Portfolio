import React from 'react'
import './project.css'
import Img from "../../assets/fitlifehub.jpeg"
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
                <div className='demo'>
                
                </div>
            </div>
        </div>
    )
}
export default project;
