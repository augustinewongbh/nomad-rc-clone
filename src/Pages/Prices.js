import React from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import Footer from "../Components/Footer";

const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

function Prices(props) {
  const { classes } = props;
  return (
    <div>
      <Header />
      <Hero
        image="https://unsplash.it/1366/768/?random"
        alt="Some random image"
      />
      <Paragraph title="some text" />
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Prices);
