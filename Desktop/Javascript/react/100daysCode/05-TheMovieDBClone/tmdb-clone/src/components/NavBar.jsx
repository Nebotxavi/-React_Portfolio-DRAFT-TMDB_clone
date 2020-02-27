import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUsername, logout } from "../services/authService";

export const NavBar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUsername();
    setUser(user);
  }, [setUser]);

  return (
    <div className="NavBar">
      <Link to="/">Home </Link>
      <Link to="/discover">DISCOVER </Link>

      <Link to="/search/movie">MOVIES </Link>
      <Link to="/search/tv">TV SHOWS </Link>
      <Link to="/search/person">PEOPLE </Link>

      {!user && <Link to="/login">Login </Link>}
      {user && (
        <Link
          to="/"
          onClick={() => {
            logout();
            window.location = "/login";
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
};
