import React from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import TabsView from "../Components/TabsView";
import Footer from "../Components/Footer";

const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

function Cafebar(props) {
  const { classes } = props;
  return (
    <div>
      <Header />
      <Hero
        image="https://unsplash.it/1366/768/?random"
        alt="Some random image"
      />
      <Paragraph
        title="Cafe Bar"
        content={`Refuel and re-energise at the NOMAD Café. Enjoy espresso creations with our house blend. Experience specialty and single origin coffee and tea from around the world brewed on the Steam Punk and choose from a menu of healthy sushi and snacks.`}
      />
      <TabsView
        labels={["Drinks", "Food"]}
        tabcontent={["Drink content", "Food content"]}
      />
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Cafebar);
