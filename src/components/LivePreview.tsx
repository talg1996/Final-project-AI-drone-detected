// components/LivePreview.tsx
import React from "react";
import "./LivePreview.css";

const LivePreview: React.FC = () => {


  return (
    <div className='web-container'>
      <img className="drone-detected" src="http://localhost:5000/live_stream"  /> 
    </div>
  );
};

export default LivePreview;
