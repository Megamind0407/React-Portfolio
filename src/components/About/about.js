import React from 'react'
import './about.css';
import aboutImg from '../../assets/aboutcover.webp'
import leetcode from '../../assets/leetcode.svg'
import GFGIcon from '../../assets/GeeksforGeeks.svg'
import Codechef from '../../assets/codechef-svgrepo-com.svg'
const about = () => {
    

    return (
        <section id="about">
            <div className="about-title">
                <span>About Me</span>
            </div>
            <div className='about-content'>
                <div className="about-desc">
                    <span>Hey, I am Aryan Gaikwad</span><br />
                    <span>🎓I am currently pursuing B.E CSE @AISSMSCOE</span><br />
                    <span>🌱I am recently working on MERN</span><br />
                    <span>🤹‍♂️I am an Open-source Enthusiast</span><br />
                    <span>🏢Looking forward to learn Web3</span><br />
                    <div className='profile'>
                        <span className='profile-tag'>Platform Profiles:</span>
                    </div>
                    <div className="platforms">
                        <a className="platform-button Leetcode" href="https://leetcode.com/Aryan_2909" target='blank'>
                            <img src={leetcode} alt="Leetcode" />
                        </a>
                        <a className="platform-button GFG" href="https://auth.geeksforgeeks.org/user/aryan_2909" target='blank'>
                            <img src={GFGIcon} alt="GFG" />
                        </a>
                        <a className="platform-button Codechef" href="https://www.codechef.com/users/megamind_29" target='blank'>
                            <img src={Codechef} alt="Codechef" />
                        </a>
                    </div>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="loading"></img>
                </div>
            </div>
        </section>
    )
}

export default about;
