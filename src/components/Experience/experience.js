import React from 'react'
import './experience.css'
import Logo1 from "../../assets/elite.png";
import Logo2 from '../../assets/GeeksforGeeks.svg'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Experience = () => {
    return (
        <section id='experience'>
            <div className='title'>Experience</div>
            <div className='experience-main'>
                <div className='section1'>
                    <div className='logo1'>
                        <a href='https://www.elitesoftwares.co.in/' target='_blank' rel="noopener noreferrer">
                            <img src={Logo1} alt=''></img>
                        </a>
                    </div>
                    <div className='timelines'>
                    <Timeline className='timeline'>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    </div>
                    <div className='card-1'>
                        <div className='content'>
                            <span className='title-role'>Python-Django WebDev Intern</span>
                            <span className='date'>Oct 2023-Jan 2024</span>
                        </div>
                        <div className='desc1'>
                            <span>During my Python Django Web development internship, I learned a wide range of skills and gained valuable experience in building web applications.
                                Some key learnings like Django Framework, Restful Api's, Authentication, Database Management
                            </span>
                        </div>
                    </div>
                </div>
                <div className='section2'>
                    <div className='logo2'>
                        <a href='https://www.geeksforgeeks.org/' target="_blank" rel="noopener noreferrer">
                            <img src={Logo2} alt=''></img>
                        </a>
                    </div>
                    <div className='timelines'>
                    <Timeline className='timeline'>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    </div>
                    <div className='card-2'>
                        <div className='content'>
                            <span className='title-role2'>Technical Content Writer</span>
                            <span className='role'>Remote(Freelance)</span>
                        </div>
                        <div className='desc1'>
                            <span>
                                My area of expertise as a freelance technical content writer for GeeksforGeeks is producing tutorials and articles about PostgreSQL, MySQL, and other database-related subjects.
                                I have 1000+ views and 500+ Likes on my articles .
                                My intention is to assist people comprehend these difficult concepts by offering simple and helpful articles.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience