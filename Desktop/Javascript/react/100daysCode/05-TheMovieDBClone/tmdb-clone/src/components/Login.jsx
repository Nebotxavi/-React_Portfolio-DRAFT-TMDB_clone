import React from "react";
import { Redirect, useLocation } from "react-router-dom";

import { login, getUsername } from "../services/authService";

export const Login = () => {
  const { state } = useLocation();

  if (getUsername()) return <Redirect to="/" />;

  const handleClickLogin = async () => {
    console.log("into handleClickLogin");
    await login();
    window.location = state ? state.from.pathname : "/";
  };

  return (
    <div>
      <button onClick={() => handleClickLogin()}>Login</button>
    </div>
  );
};
