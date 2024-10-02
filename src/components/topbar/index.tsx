import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

interface HeaderProps {
  setActivePage: (page: string) => void;
}

const Header:React.FC<HeaderProps> = ({setActivePage}) => {

  const logo = require('./logo.png');
  const [activeButton, setActiveButton] = React.useState<string>('Home'); 
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const navigate =  useNavigate();


  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName); //'Projects', 'Skills', 'Education', 'About'
    setActivePage(buttonName);

  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleLogoClick = () => {
    navigate('/homepage'); 
  };

  const getButtonStyle = (buttonName: string): React.CSSProperties => {
    return {
      backgroundColor: "transparent", 
      color: activeButton === buttonName ? "#39032a" : "#7F7F7F", 
      padding: "7px 25px",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "2px 5px",
      cursor: "pointer",
      fontSize: activeButton === buttonName ? "25px":"15px",
      fontWeight: activeButton === buttonName ? "bold" : "normal", 
      borderBottom: activeButton === buttonName ? "2px solid #6f024d" : "2px solid transparent", 
      transition: "border-bottom active-button 0.7s ease", 
    };
  };

  return (
    <div className="text-center font-kanit font-semibold">
      {/* Main content including the navbar */}
      <div style={{ flex: 1 }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side with navigation */}
          <img
            src={logo}
            alt="Logo"
            style={{ width: 'auto', height: '60px', padding: "2px", cursor: 'pointer' }}
            onClick={handleLogoClick} // Add onClick handler for the logo
          />
          <nav style={{ display: "flex", flexWrap: "wrap" }}>
            <ul style={{ 
              display: "flex", 
              listStyle: 'none', 
              padding: 1, 
              margin: 2, 
            }}>
              {['Projects', 'Skills', 'Education', 'About'].map((item, index) => (
                <li key={index} style={{ flex: "1 1 150px", marginRight: '5px', minWidth: "10px"}}>
                  <a
                    href="#"
                    onClick={() => handleClick(item)}
                    style={getButtonStyle(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side with hamburger icon */}
          <div style={{ cursor: 'pointer' }} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size="xl" color="white" />
          </div>
          
        </header>
      </div>

      {/* Sliding card from the right */}
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            right: 15,
            height: "20%",
            width: "250px",
            backgroundColor: "#9fbcfb1d",
            boxShadow: "-2px 0 5px rgba(6, 164, 167, 0.463)",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            zIndex: 500,
            borderRadius:"20px",
            transition: "transformm 1s ease-in-out",
          }}
        >
          
          <a
            href="#"
            onClick={() => handleClick('My Career')}
            style={getButtonStyle('My Career')}
          >
            My Career
          </a>
          <a
            href="#"
            onClick={() => handleClick('Cover Story')}
            style={getButtonStyle('Cover Story')}
          >
            Cover Story
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
