// src/pages/homepage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const getToProfile=()=>{
    console.log("Navigating to Profile Page... ")
    navigate('/profilepage')
  }

  return (
    <div>
      <header>
        <h1 className='font-kanit text-xl font-bold'>Welcome to the Home Page</h1>
      </header>
      <main>
        <p>This is the content of the Home Page.</p>
        <button onClick={getToProfile}>Click to see</button>
      </main>
    </div>
  );
}

export default HomePage;
