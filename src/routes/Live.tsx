// Live.tsx
import React from "react";
import "../components/Live.css";
import DetailsCard from "../components/DetailsCard";
import LivePreview from "../components/LivePreview";

const Live: React.FC = () => {
  return (
    <div className="live-container">
      <div className="DetailsCard-container">
        <DetailsCard />
      </div>

      <div className="LivePreview-container">
        <LivePreview />
      </div>
    </div>
  );
};

export default Live;
