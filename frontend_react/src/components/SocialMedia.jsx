import React from "react";
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa';
// import { FaDiscord } from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'
import { SiCodingninjas } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () =>(
    <div className="app__social">
      <div>
      <a href="https://github.com/Manaswini123456" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a></div>
        <div>
        <a href="https://www.linkedin.com/in/manaswini-voolapalli-994788201/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn /></a>
    </div>
    <div>
    <a href="https://twitter.com/Manaswini_2001" target="_blank" rel="noopener noreferrer">
      <BsTwitter /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/voolapallimanaswini/?next=%2F" target="_blank" rel="noopener noreferrer">
      <BsInstagram /></a>
    </div>
    <div>
    <a href="https://t.me/Whinimini">
      <FaTelegram /></a>
    </div>
    <div>
      {/* <a href="https://discord.gg/Mini2001#3929">
        <FaDiscord />
      </a> */}
      <a href="https://leetcode.com/Manaswini2001_167/">
      <SiLeetcode/>
      </a>
    </div>
    <div>
    <a href="https://www.naukri.com/code360/profile/Wini_2001">
      <SiCodingninjas />
      </a>
    </div>
    <div>
      <a href="https://www.figma.com/@manaswini">
        <SiFigma/>
      </a>
    </div>
    </div>
)

export default SocialMedia