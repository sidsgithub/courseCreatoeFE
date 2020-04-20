import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./components/signup/index";
import SignIn from "./components/signin/index";
import Home from './components/home/index';
import Course from './components/course/index';

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
          <Route path="/" exact>
            <SignUp/>
          </Route>
          <Route path="/course" >
            <Course/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}