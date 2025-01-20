import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa';
// import { FaDiscord } from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'
import { SiCodingninjas } from "react-icons/si";

import { images } from '../../constants';
import { SiFigma } from 'react-icons/si';
import './Navbar.scss';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar flex justify-between items-center py-4 md:py-6  ">
    <div className="app__navbar-logo">
      <img src={images.logo} alt="logo" />
    </div>
    <ul className="app__navbar-links hidden md:flex space-x-8">
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
    <div className="app__navbar-menu flex items-center">
      <HiMenuAlt4 onClick={() => setToggle(true)} />
    </div>
    {toggle && (
      <motion.div
        whileInView={{ x: [300, 0] }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="md:hidden absolute top-0 left-0 w-full bg-white p-4"
      >
        <HiX onClick={() => setToggle(false)} />
        <ul className="flex flex-col space-y-4 mt-8">
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex space-x-4">
          <a href="https://github.com/Manaswini123456" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manaswini-voolapalli-994788201/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/Manaswini_2001" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/voolapallimanaswini/?next=%2F" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="https://t.me/Whinimini">
            <FaTelegram />
          </a>
          <a href="https://leetcode.com/Manaswini2001_167/">
            <SiLeetcode />
          </a>
          <a href="https://www.naukri.com/code360/profile/Wini_2001">
            <SiCodingninjas />
          </a>
          
      <a href="https://www.figma.com/@manaswini">
        <SiFigma/>
      </a>
    
        </div>
      </motion.div>
    )}
  </nav>
  
  );
};

export default Navbar