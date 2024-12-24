import React from 'react';
import BlogVibeImage from '../assets/BlogVibe.jpg';
import VibeShopImage from '../assets/VibeShop.jpg';
import TodoImage from '../assets/TodoApp.jpg';
import MusicPlayerImage from '../assets/MusicPlayer.jpg';
import PasswordManagerImage from '../assets/PasswordGenerator.jpg';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      title: "Blog Vibe",
      description:
        "A MERN stack blogging platform allowing users to create, read, and interact with posts. Includes features like user authentication and responsive design.",
      techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://blog-vibe-6y7y.onrender.com/",
      github: "https://github.com/charanpreet01/Blog-Vibe",
      image: BlogVibeImage,
    },
    {
      title: "VibeShop",
      description:
        "An e-commerce platform with a modern design, product search, filtering, and user-friendly admin and user functionality. Built using the MERN stack.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Context API", "Tailwind CSS"],
      link: "https://vibe-shop-frontend.vercel.app/",
      github: "https://github.com/charanpreet01/VibeShop",
      image: VibeShopImage,
    },
    {
      title: "To-Do App",
      description:
        "A user-friendly to-do list application with task management features. Utilizes Context API and localStorage for state management and data persistence.",
      techStack: ["React", "Context API", "localStorage"],
      link: "https://apniitodolist.netlify.app/",
      github: "https://github.com/charanpreet01/Todo-List-2.0",
      image: TodoImage,
    },
    {
      title: "Music Player App",
      description:
        "A responsive music player allowing users to play, pause, and navigate songs with an interactive UI. Built with HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://charanpreet01.github.io/Music-Player/",
      github: "https://github.com/charanpreet01/Music-Player",
      image: MusicPlayerImage,
    },
    {
      title: "Password Generator App",
      description:
        "A secure password generator app that allows users to generate random passwords and copy them to the clipboard. Built with React and Tailwind CSS for a responsive design.",
      techStack: ["React", "Tailwind CSS", "localStorage"],
      link: "https://generatethepassword.netlify.app/",
      github: "https://github.com/charanpreet01/Password-Generator",
      image: PasswordManagerImage,
    },
  ];

  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className='flex gap-3'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
