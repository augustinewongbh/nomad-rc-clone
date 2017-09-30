import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Paragraph from "./Components/Paragraph";
import ContactForm from "./Components/ContactForm";

import "./App.css";

const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Header />

        <Hero
          image="https://unsplash.it/1366/768/?random"
          alt="Some random image"
        />
        <Paper className={classes.paper}>
          <Paragraph
            title="PHILOSOPHY"
            content="NOMAD: One who travels freely without ties holding them back. This name reflects our company philosophy in providing a facility which encompasses the sense of freedom to explore, grow and develop physically, emotionally and spiritually."
          />
          <Paragraph
            title="SPACE"
            content="NOMAD walls are custom designed and engineered by Walltopia, the world leader in artificial climbing wall construction. Walls are filled with over 11,000 innovative European holds, shapes and textures. These include the Flathold, Artline, Expression, ICP, AIX, Fiction and HRT.  Our matting incorporates the latest dual density foam with no gaps and featuring firm edge seating giving you confidence where it is needed."
          />
          <Paragraph
            title="CONTACT"
            content="Any Questions? Feel free to contact us using the form below:"
          />
          <ContactForm />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
