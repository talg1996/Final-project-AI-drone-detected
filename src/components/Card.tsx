// Card.js
import React from "react";
import "./Card.css";

interface CardProps {
  text: string;
  logo: JSX.Element; // Assuming logo is an SVG or an icon component
}

function Card({ text, logo }: CardProps) {
  return (
    <div className="card-container">
      <div className="Logo">{logo}</div>
      <div className="Logo-text">{text}</div>
    </div>
  );
}

export default Card;
