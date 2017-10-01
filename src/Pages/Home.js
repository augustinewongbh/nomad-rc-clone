import React from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import Footer from "../Components/Footer";
import ShowcaseGrid from "../Components/ShowcaseGrid";

import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <Header />
      <Hero
        image="https://unsplash.it/1366/768/?random"
        alt="Some random image"
      />
      <div style={{ padding: "2em" }}>
        <Grid container align="center" justify="center">
          <Grid item xs={12}>
            <Typography type="display2" color="accent" align="center">
              NOMAD
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              type="title"
              color="default"
              align="center"
              style={{ fontWeight: "600" }}
            >
              A revolution in bouldering
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography type="body2" color="default" align="center">
              Our innovative design of 1000 square metre climbing arena, ultra
              modern and dynamic bespoke climbing walls culminate in a
              revolutionary climbing experience in the largest bouldering gym in
              the Southern Hemisphere. Experience the largest bouldering arch in
              the Southern Hemisphere, the 2D curve and the suspended campus/peg
              board. Test your grit on the 40-degree system wall, work your core
              manoeuvring through the roofs, gain composure on the slab and put
              it all to the test on the dedicated competition wall.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src="https://unsplash.it/800/200/?random"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography type="body2" color="default" align="center">
              NOMAD Bouldering Gym is designed to give members and visitors a
              memorable experience. It is ideal for children, teens and adults
              to challenge themselves in a safe and controlled environment.
              Build confidence, fine-tune your balance, develop core strength
              and burn kilojoules by climbing and create a complete exercise
              program by adding yoga and the conditioning gym to the mix. See
              the latest climbing and outdoor gear in the pro shop.Check out our
              kids’ party and corporate team building programs.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              type="title"
              color="accent"
              align="left"
              style={{ fontSize: "2em", fontWeight: "600" }}
            >
              About Our Space
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography type="body2" color="default" align="left">
              Chill out in the lounge, play one of the 74 retro arcade games and
              continue the friendly competition with a round of table tennis.
              Refuel and re-energise at the NOMAD Café. Enjoy espresso creations
              with our house blend. Experience specialty and single origin
              coffee and tea from around the world brewed on the Steam Punk and
              choose from a menu of healthy sushi and snacks.
              <br /> NOMAD walls are custom designed and engineered by
              Walltopia, the world leader in artificial climbing wall
              construction. Walls are filled with over 11,000 innovative
              European holds, shapes and textures. These include Flathold,
              Artline, Expression, ICP, AIX, Fiction and HRT. Our matting
              incorporates the latest dual density foam with no gaps and
              featuring firm edge seating giving you confidence where it is
              needed.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ShowcaseGrid />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default withStyles(styles)(Home);
