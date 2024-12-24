import React from 'react';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Java"
];

const Skills = () => {
  return (
    <section id='skills' className='bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Skills</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='flex justify-center items-center text-gray-300 bg-gray-950 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105'
            >
              <span className='text-xl font-medium'>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
