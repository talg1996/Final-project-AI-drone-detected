// components/LivePreview.tsx
import React from "react";
import "./LivePreview.css";

const LivePreview: React.FC = () => {


  return (
    <div className='web-container'>
      <img className="drone-detected" src="http://localhost:5000/live_stream_0"  /> 
      <img className="drone-detected" src="http://localhost:5000/live_stream_1"  /> 

    </div>
    
  );
};

export default LivePreview;
