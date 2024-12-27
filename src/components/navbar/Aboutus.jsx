import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6 py-10">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center text-blue-600"
      >
        About Us
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white shadow-md rounded-lg p-6 max-w-3xl"
      >
        <p className="text-lg mb-4">
          My name is <strong>Bhargav Singh Danu</strong>, and I am the creator of this website. This project was built using
          modern web technologies such as <strong>React</strong>, <strong>Framer Motion</strong>, and <strong>GSAP</strong>.
        </p>
        <p className="text-lg mb-4">
          Being passionate about frontend development, I chose this project as my mini-project to showcase my skills. 
          While I have focused on the frontend for this project, I plan to delve into backend development during my 6th semester.
        </p>
        <p className="text-lg mb-4">
          This project was built entirely on my own.
          However, I would like to acknowledge the invaluable guidance of <strong>Mrs. Dolly Sharma</strong> and <strong>Mrs. Manisha Koranga</strong>, 
          who have supported and inspired me throughout this journey.
        </p>
      </motion.div>
    </div>
  );
};

export default About;