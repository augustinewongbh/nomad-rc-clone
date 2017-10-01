import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";

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
  <Router>
    <MuiThemeProvider theme={theme}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </MuiThemeProvider>
  </Router>
);

export default withStyles(theme)(App);
