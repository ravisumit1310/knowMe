
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [activeButton, setActiveButton] = useState<string>(''); // Track the currently active button
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false); // Handle sidebar state

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const getButtonStyle = (buttonName: string): React.CSSProperties => {
    return {
      borderRadius: "50px",
      backgroundColor: activeButton === buttonName ? "green" : "grey",
      color: activeButton === buttonName ? "lightgrey" : "black",
      padding: "10px 20px 10px 20px",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
      margin: '2px 5px',
      cursor: "pointer",
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
          <FontAwesomeIcon icon={faChild} size="2x" color="white" style={{ padding: "0px" }} />
          <nav style={{ display: "flex", flexWrap: "wrap" }}>
            <ul style={{ 
              display: "flex", 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
            }}>
              {['Projects', 'Skills', 'Education', 'About'].map((item, index) => (
                <li key={index} style={{ flex: "1 1 150px", marginRight: '10px', minWidth: "10px"}}>
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
            <FontAwesomeIcon icon={faBars} size="2x" color="white" />
          </div>
        </header>
      </div>

      {/* Sliding card from the right */}
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 80,
            right: 15,
            height: "40%",
            width: "250px",
            backgroundColor: "#6d97f11d",
            boxShadow: "-2px 0 5px rgba(0, 168, 171, 0.463)",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            zIndex: 999,
            borderRadius:"20px",
            transition: "transform 1s ease-in-out",
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
