import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const getToProfile = () => {
    console.log("Navigating to Profile Home...");
    navigate('/profilepage');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-yellow-500">
      <header>
        <h1 className="font-kanit text-3xl font-bold text-white mb-5">SUMIT KUMAR RAVI</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
        {/* First Glass Card with Text */}
        <div className="glass col-span-1 p-10">
          <h2 className="text-xl font-bold text-white">Profile Overview</h2>
          <p className="text-white">
            Welcome to my profile! Here, you'll find details about my career, skills, and personal interests.
          </p>
        </div>

        {/* Facebook Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-facebook icon text-white"></i>
        </div>

        {/* Instagram Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-instagram icon text-white"></i>
        </div>

        {/* Second Glass Card with Text */}
        <div className="glass col-span-1 p-5">
          <h2 className="text-xl font-bold text-white">Career Journey</h2>
          <p className="text-white">
            I have worked in multiple domains, specializing in web development and design.
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="glass col-span-2 p-5">
          <h2 className="text-xl font-bold text-white mb-4">Your Feedback will help me...</h2>
          <div className="search-bar flex gap-4 mb-4">
            <input
              type="text"
              placeholder="FeedBack"
              className="flex-grow px-4 py-2 rounded-lg border-none focus:outline-none"
            />
            <i className="fas fa-search text-white text-2xl"></i>
          </div>
          <p className="text-white">
            Constant Improvements are the way way to perfection,  so your feedback is highly appreciated.

          </p>
        </div>

        {/* YouTube Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-youtube icon text-white"></i>
        </div>

        {/* Twitter Icon */}
        <div className="glass col-span-1 flex items-center justify-center">
          <i className="fab fa-twitter icon text-white"></i>
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
