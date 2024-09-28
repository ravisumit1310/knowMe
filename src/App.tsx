import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Header from './components/topbar';
import ProfilePage from './pages/pofilePage';
import Services from './pages/mytestimonial/myTestimonial';

function App() {
  const [sctivePage, setActivePage] = useState<string>('Home');

  const renderContent = ()=>{
    switch (sctivePage) {
      case 'Projects':
        return <ProfilePage/>;
      case 'Skills':
        return <Services/>;
      case 'Education':
        return <h1>Education</h1>;
      case 'About':
        return <h1>About</h1>;
      default:
        return <ProfilePage/>;
    }
  }

  return (
    <>
      <Header setActivePage={setActivePage} /> 

      <div className="profile mt-50 flex-grow w-full max-w-6xl mx-auto p-6">

        <main className='profile-body'>
          {renderContent()}
        </main>
      </div>
    </>
  );
}

export default App;
