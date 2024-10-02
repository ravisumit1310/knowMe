import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';


const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const profileImage = require('./profileImage.jpg');

  const getToProfile = () => {
    console.log("Navigating to Profile Home...");
    navigate('/profilepage');
  };

  return (
    <div className=" justify-center items-center h-full bg-gradient-to-r from-[#B790D4] to-[#6b1a8b]">
      <div className="glass-container p-10 mx-5 z-50 top-10 flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border border-white/20">
        
        {/* Profile Image */}
        <div className="w-1/4 flex justify-center mb-6 md:mb-0 md:mr-10">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-45 h-45 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Career and Overview Section */}
        <div className="w-2/3 text-white text-left ml-1">
          <h2 className="text-3xl font-semibold mb-10">Hi, Welcome To My Profile</h2>
          <p className="mb-4 text-lg">
          I am Sumit Kumar Ravi, a B.Tech graduate in Information Technology from Christ University.<br/>  
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <p className="text-lg">
          I am passionate about coding and problem-solving, with experience in web development using modern frameworks like React, Next.js, and TypeScript. I also have a strong interest in mobile application development, working extensively with Flutter. I am always eager to learn new technologies and focus on enhancing the user experience in every project I undertake.
          </p>
        </div>
      </div>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
        {/* Flutter - REST APIs Experience */}
        <div className="glass col-span-1 p-10">
          <h2 className="text-xl font-bold text-white">Flutter + Rest-APIs</h2>
          <p className="text-white">
            Welcome to my profile! Here, you'll find details about my career, skills, and personal interests.
          </p>
        </div>

        {/* Next Js - Axios Experience */}
        <div className="glass col-span-1 items-center p-10 justify-center">
        <h2 className="text-xl font-bold pb-2 text-white">NextJs + TailwindCSS + Typescript</h2>
          <p className='mt-1'>This I started in my internship period..</p>
        </div>

        {/* React - Redux */}
        <div className="glass col-span-1 p-5 items-center justify-center">
        <h2 className="text-xl font-bold m-2 text-white">ReactJs + Redux</h2>
          <p className="text-white m-2 ">
            I have worked in multiple domains, specializing in web development and design.
          </p>
        </div>

        {/* DSA - C++ */}
        <div className="glass col-span-1 p-5">
          <h2 className="text-xl font-bold text-white">DSA + C++</h2>
          <p className="text-white">
            I have worked in multiple domains, specializing in web development and design.
          </p>
        </div>

        {/* YouTube Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-youtube icon text-white"> i am also a page</i>
        </div>

        {/* Twitter Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-twitter icon text-white">helooo</i>
        </div>

        {/* Search Bar Section */}
        <div className="border rounded-lg border-collapse col-span-2 p-5">
          <h2 className="text-xl font-bold text-white mb-4">Your Feedback will help me...</h2>
          <div className="search-bar flex gap-4 mb-4">
            <input
              type="text"
              placeholder="FeedBack"
              className="flex-grow px-4 py-2 rounded-xl border-none focus:outline-none"
            />
            <i className="fas fa-search text-white text-2xl"></i>
          </div>
          <p className="text-white">
            Constant Improvements are the way way to perfection,  so your feedback is highly appreciated.

          </p>
        </div>

        {/* Profile Button */}
        {/* <div className="col-span-full text-center mt-6">
          <button
            onClick={getToProfile}
            className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Go to Profile Page
          </button>
        </div> */}
      </main>

    </div>
  );
};

export default HomePage;
