import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { InstaIco, FbIco, EmailIco } from "../Static/svg";
import Paragraph from "./Paragraph";
const styles = theme => ({
  root: {
    padding: "1em"
  },
  rowText: {
    textAlign: "left"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography type="title">Keep in touch</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={16} justify="center" align="center">
        <Grid item>
          <a href="#">
            <InstaIco />
          </a>
        </Grid>
        <Grid item>
          <FbIco />
        </Grid>
        <Grid item>
          <EmailIco />
        </Grid>
      </Grid>
      <Grid className={classes.rowText} container direction="row" spacing={20}>
        <Grid item xs={12} sm={4}>
          <h3>Address</h3>
          <p>
            NOMAD Bouldering Gym Unit 7/12 Chester St, Annandale Sydney NSW 2038<br />Corner
            of Gehrig Lane & Chester Street
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>Hours</h3>
          <p>
            MON - FRI: 6:30 - 21:30<br />
            SAT - SUN: 8:00 - 20:00<br />
            QUEEN'S BIRTHDAY + LABOUR DAY: 9:30-21:30<br />
            CLOSED: 25, 26 Dec & 1 Jan
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>Contact</h3>
          <p>
            NOMAD Bouldering Gym<br />
            Phone: (02) 9565 4584<br />
            Email: hello@nomadbouldering.com<br />
            Instagram:{" "}
            <a href="https://www.instagram.com/nomadbouldering">
              nomadbouldering
            </a>
            <br />
            Facebook:{" "}
            <a href="https://www.facebook.com/Nomadboulderinggym">
              nomadboulderinggym
            </a>
            <br />
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default withStyles(styles)(Footer);
