// components/DetailsCard.tsx
import React from "react";
import "../components/DetailsCard.css";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const DetailsCard: React.FC = () => {
  return (
    <div className="details-card">
      <h2>Details</h2>
      <div className="details-item">
        <p className="data-title">Drone count:<span className="data">1</span><span className="logo">
          <GiDeliveryDrone />
        </span></p>
       
        
      </div>
      <div className="details-item">
        <p className="data-title">Message send:<span className="data">Yes</span>
        <span className="logo">
          <FaCheck />
        </span></p>
        

        <i className="icon-check" />
      </div>
      <div className="details-item">
        <p className="data-title">Buzzer:<span className="data">On</span>
        <span className="logo">
          <AiOutlineSound />
        </span></p>
        

        <i className="icon-buzzer" />
      </div>
      <div className="details-item">
        <p className="data-title">Camera:<span className="data">Online</span>
        <span className="logo">
          <BsCameraVideo />
        </span></p>
        
        <i className="icon-online" />
      </div>
    </div>
  );
};

export default DetailsCard;
