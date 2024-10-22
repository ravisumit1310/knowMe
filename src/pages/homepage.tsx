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
          I am <b>Sumit Kumar Ravi</b>, a B.Tech graduate in Information Technology from Christ University.<br/>  
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <p className="text-lg">
          I am a B.Tech graduate in Information Technology from Christ University, Bangalore, with a strong background in both mobile and web application development. My expertise lies in technologies such as Flutter, React, Next.js, and TypeScript, which I have applied in several projects. I developed and maintained the Pocket App, a mobile trading platform, where I implemented key features to optimize user trading strategies. Additionally, I worked on migrating functionalities from mobile to web for a Next.js web application, focusing on performance, real-time data interactions, and SEO improvements. At CehPoint, I led the development of a commercial app used by over 10,000 users, integrating services like Google Maps and enhancing UI/UX. My commitment to delivering high-quality solutions and continuously refining user experiences drives my passion for development.
          </p>
        </div>
      </div>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
        {/* Flutter - REST APIs Experience */}
        <div className="glass col-span-1 p-10">
          <h2 className="text-xl font-bold text-white">Flutter + Rest-APIs</h2>
          <p className="text-white">
            "One of the most intresting tech stack by Google throug which I started my career. My journey with Flutter began during my early projects, and it's been an exciting experience ever since. Flutter’s cross-platform capabilities, combined with its simplicity, make it a great choice for mobile development. With efficient state management using tools like GetX and a growing community for support, I was able to quickly build and enhance mobile applications. The ability to create visually appealing, performant apps with a single codebase has made Flutter one of my favorite tech stacks."
          </p>
        </div>

        {/* Next Js - Axios Experience */}
        <div className="glass col-span-1 items-center p-10 justify-center">
        <h2 className="text-xl font-bold pb-2 text-white">NextJs + TailwindCSS + Typescript</h2>
          <p className='mt-1'>I started working with this during my internship. It's one of the best web tech stacks with excellent community support. Next.js provides a solid structure that makes development easier, and when combined with TypeScript, it becomes even more convenient to spot errors. Overall, I had a great experience developing with this tech stack.</p>
        </div>

        {/* React - Redux */}
        <div className="glass col-span-1 p-5 items-center justify-center">
        <h2 className="text-xl font-bold m-2 text-white">ReactJs + Redux</h2>
          <p className="text-white m-2 ">"Ahhh! Here we go again! Honestly, I didn't enjoy working with Redux at first—it felt a bit overwhelming and requires a lot of structural consistency in the code. However, it's undeniably a robust stack and is widely used across the industry."</p>
        </div>

        {/* DSA - C++ */}
        <div className="glass col-span-1 p-5">
          <h2 className="text-xl font-bold text-white">DSA + C++</h2>
          <p className="text-white">
            I have been improving constantly my logic creatinons so that I could contribute intp this rapidly growing texh world.
          </p>
        </div>

        {/* YouTube Icon */}
        {/* <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-youtube icon text-white"> i am also a page</i>
        </div> */}

        {/* Twitter Icon */}
        {/* <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-twitter icon text-white">helooo</i>
        </div> */}

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

      </main>

    </div>
  );
};

export default HomePage;
