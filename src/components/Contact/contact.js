import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import github from '../../assets/socials/github-mark-white.png'
import linkedin from "../../assets/socials/linkedin.png"
import instagram from '../../assets/socials/instagram.png'
import discord from "../../assets/socials/discord.png"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gg62jxm', 'template_26t4bsg', form.current, {
                publicKey: 'jSlyxhWUsIxjyCBqB',
            })
            .then(
                (result) => {
                    console.log(result.txt);
                    e.target.reset();
                    alert('Email Sent !!!');
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    return (
        <section id='contact'>
            <div className='title'>Contact</div>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
            </form>
            <div className='socials'>
                <a className='social github' href='https://github.com/Megamind0407' target='_blank' rel="noreferrer">
                    <img src={github} alt='' />
                </a>
                <a className='social linkedin' href='https://www.linkedin.com/in/aryan-gaikwad/' target='_blank' rel="noreferrer">
                    <img src={linkedin} alt='' />
                </a>
                <a className='social instagram' href='https://www.instagram.com/aryan_0721_' target='_blank' rel="noreferrer">
                    <img src={instagram} alt=''></img>
                </a>
                <a className='social discord' href='https://discord.com/channels/@me' target='_blank' rel="noreferrer">
                    <img src={discord} alt='' />
                </a>
            </div>
        </section>

    )
}
export default Contact

