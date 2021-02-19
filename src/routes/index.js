import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import NewUser from '../views/NewUser';
import User from '../views/User';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/newuser" exact component={NewUser}/>
        <Route path="/user/:id" exact component={User}/>
      </Switch>
    </BrowserRouter>
  )
}