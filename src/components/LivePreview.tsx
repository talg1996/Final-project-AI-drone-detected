// components/LivePreview.tsx
import React from "react";
import "./LivePreview.css";

import droneImage from "../photo/dronePhoto.png"; // Import the drone image

const LivePreview: React.FC = () => {
  return (
    <div className="live-preview">
      <img src={droneImage} alt="Drone" className="drone-image" />
    </div>
  );
};

export default LivePreview;
