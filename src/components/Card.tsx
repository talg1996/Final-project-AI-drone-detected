import React from "react";
import "./Card.css";

interface CardProps {
  text: string;
  logo: JSX.Element;
}

function Card({ text, logo }: CardProps) {
  return (
    <div className="card-container">
    <p> {logo}</p>
     <p>{text}</p> 
    </div>
  );
}

export default Card;
