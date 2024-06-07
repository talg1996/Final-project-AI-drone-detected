import React, { useState, useEffect } from "react";
import "../components/DetailsCard.css";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const DetailsCard: React.FC = () => {
  const [droneCounts, setDroneCounts] = useState<{ DronesDetectedCam1: number; DronesDetectedCam2: number }>({
    DronesDetectedCam1: 0,
    DronesDetectedCam2: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/live_data');
        const data = response.data;
        // Update droneCounts state with the received data
        console.log(data);
        setDroneCounts(data);
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
          <span>Drone count (Cam 1): </span>
          <span>{droneCounts.DronesDetectedCam1} </span>
          <span><GiDeliveryDrone /></span>
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
          <span>Drone count (Cam 2): </span>
          <span>{droneCounts.DronesDetectedCam2} </span>
          <span><GiDeliveryDrone /></span>
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
          <span>Message send: </span>
          <span>Yes</span>
          <span><FaCheck /></span>
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
          <span>Buzzer:</span>
          <span>{droneCounts.DronesDetectedCam1 > 0 || droneCounts.DronesDetectedCam2 > 0 ? "ON" : "OFF"}</span>
          <span><AiOutlineSound /></span>
        </p>
      </div>
      <div className="details-item">
        <p className="data-title">
          <span>Camera:</span>
          <span>Online</span>
          <span><BsCameraVideo /></span>
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
