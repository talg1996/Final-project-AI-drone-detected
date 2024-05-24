import React from "react";
import "./Card.css";

interface CardProps {
  text: string;
  logo: JSX.Element;
}

function Card({ text, logo }: CardProps) {
  return (
    <div className="card-container">
     {logo}
      {text}
    </div>
  );
}

export default Card;
