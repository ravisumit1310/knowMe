import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Header from './components/topbar';
import Services from './pages/mytestimonial/myTestimonial';
import ExperiencePage from './pages/pofilePage';
import EducationInfo from './pages/education/education';
import CoverLetter from './pages/coverLetter/coverPage';

function App() {
  const [sctivePage, setActivePage] = useState<string>('Home');

  const renderContent = ()=>{
    switch (sctivePage) {
      case 'Projects':
        return <ExperiencePage/>;
      case 'Skills':
        return <Services/>;
      case 'Education':
        return <EducationInfo/>;
      case 'Cover':
        return <CoverLetter/>;
      default:
        return <ExperiencePage/>;
    }
  }

  return (
    <>
      <Header setActivePage={setActivePage} /> 

      <div className="profile mt-0 flex-grow w-full mx-auto p-2">
        <main className='profile-body'>
          {renderContent()}
        </main>
      </div>
    </>
  );
}

export default App;
