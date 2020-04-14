import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Home from './components/home';

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}