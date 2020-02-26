import React from "react";

import { getToken, isUserValid, getSessionId } from "../services/authService";

// PUT IN TRY/CATCH EVERY AWAIT call
export const Login = () => {
  const login = async () => {
    const token = await getToken();

    const validUser = await isUserValid(
      token,
      process.env.REACT_APP_TESTING_USER,
      process.env.REACT_APP_TESTING_PASS
    );

    if (validUser) {
      const sessionId = await getSessionId(token);
      const newLocalStorage = {
        username: process.env.REACT_APP_TESTING_USER,
        sessionId
      };
      localStorage.setItem("TMDB_clone", JSON.stringify(newLocalStorage));
    } else {
      console.log("Invalid username or password.");
      return;
    }
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};
