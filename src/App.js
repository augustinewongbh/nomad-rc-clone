import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cafebar from "./Pages/Cafebar";
import Classes from "./Pages/Classes";
import Prices from "./Pages/Prices";
import Groups from "./Pages/Groups";
import Journey from "./Pages/Journey";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "material-ui/styles";
import { grey, orange } from "material-ui/colors";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: orange
  }
});

const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/journey" component={Journey} />
        <Route path="/about" component={About} />
        <Route path="/cafebar" component={Cafebar} />
        <Route path="/classes" component={Classes} />
        <Route path="/prices" component={Prices} />
        <Route path="/groups" component={Groups} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default withStyles(theme)(App);
