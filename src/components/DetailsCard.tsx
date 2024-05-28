import React, { useState, useEffect } from "react";
import "../components/DetailsCard.css";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const DetailsCard: React.FC = () => {
  const [droneCount, setDroneCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/live_data');
        const data = response.data;
        // Update droneCount state with the received data
        console.log(data);
        setDroneCount(data.DronesDetected);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error gracefully, e.g., display a message to the user
      }
    };

    // Fetch data when the component mounts
    fetchData();

    // Set up interval to fetch data every few seconds (adjust as needed)
    const interval = setInterval(fetchData, 100);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="details-card">
      <h2>Details</h2>
      <div className="details-item">
        <p className="data-title">
          <p>Drone count: </p>           <p>{droneCount} </p>         <p> <GiDeliveryDrone /></p>    
         
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
        <p>  Message send: </p>
         <p> Yes</p>
         
           <p> <FaCheck /></p>
         
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
        <p>  Buzzer:</p>
         <p>{droneCount > 0 ? "ON" : "OFF"}</p>
          
         <p>   <AiOutlineSound /></p>
          
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
          <p>Camera:</p>
         <p>Online</p>
         
            <p> <BsCameraVideo /></p>
        
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
