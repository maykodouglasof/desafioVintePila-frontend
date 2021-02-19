import React from "react";
import { Switch } from "react-router-dom";
import RouteHandler from "../components/RouteHandler";

import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import NewUser from "../views/NewUser";
import User from "../views/User";

export default function Routes(props) {
  return (
      <Switch>
        <RouteHandler private exact path="/">
          <Home />
        </RouteHandler>
        <RouteHandler exact path="/login">
          <Login />
        </RouteHandler>
        <RouteHandler exact path="/signup">
          <SignUp />
        </RouteHandler>
        <RouteHandler exact path="/newuser">
          <NewUser />
        </RouteHandler>
        <RouteHandler exact path="/user/:id">
          <User />
        </RouteHandler>
      </Switch>
  );
}
