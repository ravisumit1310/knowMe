import React from "react";

const Footer = () => {
  return (
    // Footer
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <div className="text-2xl font-bold">Contact Me</div>
          <nav className="space-x-4 mt-2">
            <a href="../homepage" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="../" className="text-gray-400 hover:text-white">
              Experiences
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              About us
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Doctors
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact us
            </a>
          </nav>
        </div>
        <div className="text-gray-400 mb-4">+91 - 852 978 7674</div>
        <div className="text-gray-400 mb-4">sumit.kumar.ravi.09@gmail.com</div>
        <div className="text-gray-400">
          Nice To See You..
        </div>
      </div>
    </footer>
  );
};

export default Footer;
