import React from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import TabsView from "../Components/TabsView";
import Footer from "../Components/Footer";
import List, { ListItem, ListItemText } from "material-ui/List";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

const drinkList1 = [
  { title: "White Coffee", content: "R 3.50 L 4.00" },
  { title: "Black Coffee", content: "R 3.00 L 3.50" },
  { title: "Cold Brew", content: "L 5.00" }
];
const drinkList2 = [
  { title: "Chai", content: "R 4.00 L 5.00" },
  { title: "Hot Chocolate", content: "R 4.00 L 5.00" },
  { title: "Steam Punk Specialty Tea", content: "L 5.00" }
];

const foodList = [
  {
    title: "Box",
    detail: "Salmon & Prawn",
    price: " 9.90"
  },
  {
    title: "Maki",
    detail: "Assorted Mini Rolls",
    price: " 6.90"
  },
  {
    title: "Temaki",
    detail: "Sushi Rolls - Assorted Fillings",
    price: "2.90"
  }
];
const Drinks = () => (
  <Grid container style={{ width: "100%" }}>
    <Grid item xs={12} sm={6}>
      <List>
        {drinkList1.map(item => (
          <ListItem>
            <ListItemText primary={item.title} secondary={item.content} />
          </ListItem>
        ))}
      </List>
    </Grid>
    <Grid item xs={12} sm={6}>
      <List>
        {drinkList2.map(item => (
          <ListItem>
            <ListItemText primary={item.title} secondary={item.content} />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

const Food = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography type="title" color="accent" style={{ textAlign: "center" }}>
        Sushi
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <List>
        {foodList.map(item => (
          <ListItem>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <ListItemText primary={item.title} secondary={item.detail} />
              <ListItemText
                primary={item.price}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              />
            </div>
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

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
        tabcontent={[<Drinks />, <Food />]}
      />
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Cafebar);
