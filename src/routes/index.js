import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>
      </Switch>
    </BrowserRouter>
  )
}