import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <p>I will be the sign un page</p>
        </Route>
        <Route exact path="/signin">
          <p>I will be the sign in page</p>
        </Route>
        <Route exact path="/browse">
          <p>I will be the browse page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
