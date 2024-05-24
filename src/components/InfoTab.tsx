import React from "react";
import "./InfoTab.css";
import TeamLogo from "../Logo/AILogo.png"; // Import the drone image

const InfoTab: React.FC = () => {
  return (
    <div className="info-container">
        <div className="infoDetails-container">
           <p>Camera details: <span> 1080P C920 logitech</span></p>
           <p>Buzzere details: <span>Logitech C560</span> </p>
           <p>Version: <span>1.00.0V </span></p>
           <p>Support: <span><a href="mailto:sdfsdf@gmail.com">talg1996@gmail.com</a></span></p>
           <p>Made by: <span>Tal and Gad Ruppin</span> </p>
           
            
        </div>
        <div className="teamLogo-container">
           <img src={TeamLogo} alt="Company logo" />
        </div>


    </div>

  
  );
};

export default InfoTab;
 
