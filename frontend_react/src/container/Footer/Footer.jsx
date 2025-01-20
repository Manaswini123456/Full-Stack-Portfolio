import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nbozc2e', 'template_6hlmqwc', form.current, {
        publicKey: 'IqlNjDoMj0yyaLSb6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee <span>&</span> chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:manaswiniv2001@gmail.com" className="p-text">
          manaswiniv2001@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8130518968" className="p-text">
            +91-8130518968
          </a>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="app__footer-form">
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" name="username" autoComplete='off' required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete='off' required/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" autoComplete='off'/>
        </div>
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
