import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Profile from '../assets/profile.png';
import myCV from "../assets/Charanpreet_Resume.pdf"
import { saveAs } from "file-saver"
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {

  const openAccount = (url) => {
    window.open(url, '_blank');
  }

  const downloadCV = () => {
    saveAs(myCV, "Charanpreet_Singh_Resume.pdf");
  }

  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
      <div className='max-w-7xl mt-24 mx-12 lg:mx-auto items-center flex flex-col lg:flex-row gap-16 lg:gap-40 justify-between'>
        <div className='md:space-y-6 px-4 text-center lg:text-justify flex lg:block flex-col justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Charanpreet Singh</p></h1>
          <p className='md:text-3xl font-medium text-xl mb-3'>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Programmer",
                "MERN Stack Developer"
              ]}
              typeSpeed={80}
              deleteSpeed={50}
              loop={true}
              cursor={true}
            />
          </p>
          <p className='lg:w-[600px] w-9/12 mx-5 md:mx-0 mb-4 md:mb-0 text-gray-300'>
            A passionate MERN Stack Developer focused on mastering web technologies to build efficient, scalable
            applications, with a strong drive to contribute to innovative development teams and continuously enhance my
            skills to solve real-world challenges.
          </p>
          <button onClick={downloadCV} className='px-3 py-2 flex items-center gap-2 bg-blue-600 rounded-md text-white hover:bg-blue-700'>
            Download CV
          </button>
          <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
            <FaLinkedin onClick={() => openAccount("https://linkedin.com/in/charanpreet01")} className='hover:text-blue-400 cursor-pointer' />
            <FaGithub onClick={() => openAccount("https://github.com/charanpreet01")} className='hover:text-blue-400 cursor-pointer' />
          </div>
        </div>
        <div className='relative group'>
          <img
            src={Profile}
            alt="Profile"
            className='rounded-full border border-blue-600 w-[200px] h-[200px] md:w-[240px] md:h-[240px] xl:w-[300px] xl:h-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
