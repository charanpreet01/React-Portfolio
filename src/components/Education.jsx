import React from 'react';

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Amritsar Group of Colleges",
    year: "July 2022 – July 2025",
    description: "Achieved a CGPA of 8.57/10 while building a strong foundation in software development and programming.",
    icon: "🎓",
  },
  {
    degree: "Class XII | Commerce",
    institution: "Ashoka Senior Secondary School",
    year: "2022",
    description: "Secured 92.2%, demonstrating excellence in academics and analytical skills.",
    icon: "🎓",
  },
];

const training = [
  {
    role: "Web Application Development",
    company: "Solitaire Infosys, Mohali",
    year: "June 2024 - July 2024",
    description: "Gained expertise in building full-stack web applications using MERN Stack technologies.",
    icon: "💻",
  },
];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Training</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'
              >
                <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                  <p className='text-gray-300'>{edu.institution}</p>
                  <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                  <p className='text-gray-300 mt-2'>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Training Section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Training</h3>
            {training.map((val, index) => (
              <div
                key={index}
                className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'
              >
                <div className='text-4xl mr-6 text-blue-500'>{val.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{val.role}</h4>
                  <p className='text-gray-300'>{val.company}</p>
                  <p className='text-gray-300 text-sm italic'>{val.year}</p>
                  <p className='text-gray-300 mt-2'>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
