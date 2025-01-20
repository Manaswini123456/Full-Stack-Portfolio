import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';



const Header = () => {
  const openResume = () => {
    // Open a new tab with the URL of your resume
    const resumeUrl = 'https://drive.google.com/file/d/1D4w0MPZpqSbHdWsQRS4VqmpQ6OIGoth4/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className='flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-20'>
  <div className='container mx-auto px-4 py-14 md:flex-1'>
    <div className="max-w-3xl mx-auto text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">HELLO!</h1>
      <h2 className="text-5xl font-bold mb-4">I am Manaswini Voolapalli</h2>
      <p className="text-lg mb-8">I'm an ardent web developer and machine learning enthusiast, passionate about crafting seamless digital experiences. Embracing the challenge, I find solace in books and thrive on decoding complex logic behind Data Structures and Algorithms questions. With a heart for code and a mind for logic, I journey through the exciting fusion of technology and creativity.</p>
      <div className="flex justify-center md:justify-start">
        <button className="bg-white border-b-4 text-gray-900 rounded-full py-3 px-8 text-lg font-semibold mr-4 hover:bg-gray-700 hover:text-gray-50" onClick={openResume}>Download Resume</button>
      </div>
    </div>
  </div>
  <div className='md:flex-1 relative w-full md:w-auto'>
    <div className="overflow-hidden border-4 border-black shadow-xl" style={{ padding: '10px' }}>
      <img src={images.profile} alt='profile' className='w-full h-96 object-cover' />
    </div>
  </div>
</div>





  );
};

export default AppWrap(Header, 'home');
