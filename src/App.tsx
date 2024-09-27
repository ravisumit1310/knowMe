import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Header from './components/topbar';

function App() {
  
  return (
    <>
    <Header/>
    <div className="profile">
      <header className="profile-header">
        <h2>hi, This is Sumit here...</h2>
      </header>

      <main className='profile-body'>
        <HomePage/>
      </main>
    </div>
    </>
  );
}

export default App;
