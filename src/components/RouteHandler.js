import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ children, ...rest }) => {
  console.log(localStorage.getItem('userId'));

  const isLogged = () => {
    const token = localStorage.getItem("userId");
    return token ? true : false;
  };
  const logged = isLogged(true);
  const authorized = rest.private && !logged ? false : true;

  return (
    <Route
      {...rest}
      render={() => authorized ? children : <Redirect to="/login" />}
    />
  );
};
