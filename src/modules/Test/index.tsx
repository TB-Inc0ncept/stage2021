import React from "react";
import Form from "./test";
import Count_down from "../Countdown";
import Menu from "./menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Test() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/form-test">Form test</Link>
            </li>
            <li>
              <Link to="/menu-test">Menu test</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form-test">
            <Form />
          </Route>
          <Route path="/clock">
            <Count_down />
          </Route>
          <Route path="/menu-test">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Page Home</h2>;
}