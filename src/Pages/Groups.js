import React from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import Footer from "../Components/Footer";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

function Groups(props) {
  const { classes } = props;
  return (
    <div>
      <Header />
      <Hero
        image="https://unsplash.it/1366/768/?random"
        alt="Some random image"
      />
      <div style={{ padding: "4em 2em" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography type="body2">
              NOMAD offers a number of options for your next group event.
              Whether it’s a birthday party, school trip or corporate gathering.
              Organise your group around the type of event and activities you
              would like – whether it’s team building excercise or group fun,
              climbing in our spectacular bouldering arena. Our parties and
              groups are open to all skill levels. No experience is necessary!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography type="title" color="accent">
              Choose Your Event
            </Typography>
          </Grid>
          <div style={{ padding: "1em" }}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography
                  type="title"
                  color="accent"
                  style={{ paddingBottom: "0.5em" }}
                >
                  Summit
                </Typography>
                <Typography type="body1">
                  $349/Up to 10 Climbers
                  <ul>
                    <li>Includes everything from First Ascent</li>
                    <li>Sushi plate</li>
                    <li>Fresh lemonade/juice</li>
                    <li>Party favours</li>
                  </ul>
                  $25 for each additional climber
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  type="title"
                  color="accent"
                  style={{ paddingBottom: "0.5em" }}
                >
                  First Ascent
                </Typography>
                <Typography type="body1">
                  $249/Up to 10 Climbers
                  <ul>
                    <li>Safety Instructions for kids</li>
                    <li>Private party space - 1 hour</li>
                    <li>Rental gears (shoes & chalk bag)</li>
                    <li>
                      10% discount available for weekday parties (Monday -
                      Thursday)
                    </li>
                  </ul>
                  $20 for each additional climber
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Groups);
