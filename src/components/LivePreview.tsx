// components/LivePreview.tsx
import React from "react";
import "./LivePreview.css";

const LivePreview: React.FC = () => {


  return (
    <div className='web-container'>
      <img src="http://192.168.1.25:5000/video_feed" />
    </div>
  );
};

export default LivePreview;
