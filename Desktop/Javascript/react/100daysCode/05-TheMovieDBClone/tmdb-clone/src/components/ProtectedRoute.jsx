import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUsername } from "../services/authService";

export const ProtectedRoute = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log("props :", props);
        if (!getUsername())
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        return <Component {...props} />;
      }}
    />
  );
};
