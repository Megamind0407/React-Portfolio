import React, { useState } from 'react';
import './project.css';
import Project1 from "../../assets/fitlifehub.jpeg";
import Project2 from "../../assets/SkyEase Poster.png"
import { ExternalLink } from 'lucide-react';
import { Code } from 'lucide-react';

const Project = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = (buttonType) => {
        if (buttonType === 'All'|| buttonType === 'ReactJs') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <div className='projects'>
            <div className='title'>Projects</div>
            <div className='btn-group'>
                <button className='btn1'onClick={() => handleButtonClick('All')}>All</button>
                <button className='btn1' onClick={() => handleButtonClick('ReactJs')}>ReactJs</button>
                <button className='btn1' onClick={() => handleButtonClick('NextJs')}>NextJs</button>
                <button className='btn1' onClick={() => handleButtonClick('MERN')}>MERN</button>
            </div>
            {isVisible && (
                <div className='project-container'>
                <div className='project-card'>
                    <div className='content'>
                        <img src={Project1} alt="FitLife Hub" />
                    </div>
                    <div className='project-title'>FitLife Hub</div>
                    <div className='desc'>
                        <p>Engineered a fitness website utilizing ReactJs with a seamless user interface</p>
                    </div>
                    <div className='btns'>
                        <div className='bt1'><span className='text'>ReactJs</span></div>
                        <div className='bt2'><span className='text'>Tailwind</span></div>
                        <div className='bt3'><span className='text'>NodeJs</span></div>
                        <div className='bt4'><span className='text'>Material UI</span></div>
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
                        <a href='https://github.com/Megamind0407/fitlifehub.git' target='_blank' rel="noreferrer">
                            <button className='code'>
                                <div className='icon'>
                                    <Code />
                                </div>
                                <div className='txt'>Code</div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='content'>
                        <img src={Project2} alt="Sky Ease" />
                    </div>
                    <div className='project-title'>SkyEase</div>
                    <div className='desc'>
                        <p>Established an Airline Flight Booking Website using ReactJs with efficient user experience</p>
                    </div>
                    <div className='btns'>
                        <div className='bt1'><span className='text'>HTML</span></div>
                        <div className='bt3'><span className='text'>CSS</span></div>
                        <div className='bt4'><span className='text'>ReactJs</span></div>
                        <div className='bt4'><span className='text'>NodeJs</span></div>
                    </div>
                    <div className='buttons'>
                        <a href='https://sky-ease.vercel.app/' target='_blank' rel="noreferrer">
                            <button className='demo'>
                                <div className='live'>
                                    <ExternalLink />
                                </div>
                                <div className='btn-text'>Live</div>
                            </button>
                        </a>
                        <a href='https://github.com/Megamind0407/SkyEase' target='_blank' rel="noreferrer">
                            <button className='code'>
                                <div className='icon'>
                                    <Code />
                                </div>
                                <div className='txt'>Code</div>
                            </button>
                        </a>
                    </div>
                </div>
                {/* <div className='project-card'>
                    <div className='content'>
                        <img src={Project2} alt="Sky Ease" />
                    </div>
                    <div className='project-title'>SkyEase</div>
                    <div className='desc'>
                        <p>Established an Airline Flight Booking Website using ReactJs with efficient user experience</p>
                    </div>
                    <div className='btns'>
                        <div className='bt1'><span className='text'>HTML</span></div>
                        <div className='bt3'><span className='text'>CSS</span></div>
                        <div className='bt4'><span className='text'>ReactJs</span></div>
                        <div className='bt4'><span className='text'>NodeJs</span></div>
                    </div>
                    <div className='buttons'>
                        <a href='https://sky-ease.vercel.app/' target='_blank' rel="noreferrer">
                            <button className='demo'>
                                <div className='live'>
                                    <ExternalLink />
                                </div>
                                <div className='btn-text'>Live</div>
                            </button>
                        </a>
                        <a href='https://github.com/Megamind0407/SkyEase' target='_blank' rel="noreferrer">
                            <button className='code'>
                                <div className='icon'>
                                    <Code />
                                </div>
                                <div className='txt'>Code</div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='content'>
                        <img src={Project2} alt="Sky Ease" />
                    </div>
                    <div className='project-title'>SkyEase</div>
                    <div className='desc'>
                        <p>Established an Airline Flight Booking Website using ReactJs with efficient user experience</p>
                    </div>
                    <div className='btns'>
                        <div className='bt1'><span className='text'>HTML</span></div>
                        <div className='bt3'><span className='text'>CSS</span></div>
                        <div className='bt4'><span className='text'>ReactJs</span></div>
                        <div className='bt4'><span className='text'>NodeJs</span></div>
                    </div>
                    <div className='buttons'>
                        <a href='https://sky-ease.vercel.app/' target='_blank' rel="noreferrer">
                            <button className='demo'>
                                <div className='live'>
                                    <ExternalLink />
                                </div>
                                <div className='btn-text'>Live</div>
                            </button>
                        </a>
                        <a href='https://github.com/Megamind0407/SkyEase' target='_blank' rel="noreferrer">
                            <button className='code'>
                                <div className='icon'>
                                    <Code />
                                </div>
                                <div className='txt'>Code</div>
                            </button>
                        </a>
                    </div>
                </div> */}
                </div>
            )}
            
            {!isVisible && (
                <div className='new_project' style={{textAlign:'center', marginTop:'5em',fontWeight:'bold'}}>New Projects Coming Soon.. 🧑‍💻</div>
            )}
        </div>
    );
};

export default Project;
