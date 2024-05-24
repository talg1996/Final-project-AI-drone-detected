// Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Header.css";
import { RiLiveLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

function Header() {
  return (
    <div className="header-container">
      <div className="Header-container">
        <Link className="link-text" to="/live">
          <Card text="Live" logo={<RiLiveLine />} />
        </Link>
        <Link className="link-text" to="/database">
          <Card text="Database" logo={<FaDatabase />} />
        </Link>
        <Link className="link-text" to="/info">
          <Card text="Info" logo={<FaInfo />} />
        </Link>
        <Link className="link-text" to="/list-check">
          <Card text="List Check" logo={<FaListCheck />} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
