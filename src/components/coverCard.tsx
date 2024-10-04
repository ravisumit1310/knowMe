import React from "react";
import BhMap from './BiharMap.png'; 

const CoverCard: React.FC = () => {
  return (
    <div className="relative bg-[#e0d6c3] shadow-md rounded-lg p-6 text-center">
      {/* Wrapper for map */}
      <div className="flex justify-center items-center h-screen mb-6">
        {/* Map of Bihar */}
        <img
          src={BhMap}
          alt="Map of Bihar"
          className=" h-auto object-cover opacity-10" // Centered with width of 80%
        />
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Blog</h1>
      </div>
    </div>
  );
};

export default CoverCard;
