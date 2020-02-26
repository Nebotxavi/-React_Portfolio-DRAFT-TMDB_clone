import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Home </Link>
      <Link to="/discover">DISCOVER </Link>

      <Link to="/movie">MOVIES </Link>
      <Link to="/tv">TV SHOWS </Link>
      <Link to="/person">PEOPLE </Link>
      <Link to="/login">Login </Link>
    </div>
  );
};
