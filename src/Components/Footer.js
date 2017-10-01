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
    padding: "1em",
    backgroundColor: "#ed5a00",
    textAlign: "center"
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
          <a href="https://www.instagram.com/nomadbouldering">
            <InstaIco />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.facebook.com/Nomadboulderinggym">
            <FbIco />
          </a>
        </Grid>
        <Grid item>
          <a href="mailto:hello@nomadbouldering.com">
            <EmailIco />
          </a>
        </Grid>
      </Grid>
      <Grid
        className={classes.rowText}
        container
        direction="row"
        justify="center"
        spacing={24}
      >
        <Grid item xs={12} sm={4}>
          <Typography type="title">Address</Typography>
          <Typography type="body2">
            NOMAD Bouldering Gym Unit 7/12 Chester St, Annandale Sydney NSW 2038<br />Corner
            of Gehrig Lane & Chester Street
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography type="title">Hours</Typography>
          <Typography type="body2">
            Mon - Fri: 6:30 - 21:30<br />
            Sat - Sun: 8:00 - 20:00<br />
            Queen's Birthday + Labour Day: 9:30-21:30<br />
            CLOSED: 25, 26 Dec & 1 Jan
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography type="title">Contact</Typography>
          <Typography type="body2">
            NOMAD Bouldering Gym<br />
            Phone: (02) 9565 4584<br />
            Email:{" "}
            <a
              style={{
                color: "#000",
                cursor: "pointer",
                textDecoration: "none",
                fontStyle: "italic"
              }}
              href="mailto:hello@nomadbouldering.com"
            >
              hello@nomadbouldering.com
            </a>
            <br />
            Instagram:{" "}
            <a
              style={{
                color: "#000",
                cursor: "pointer",
                textDecoration: "none",
                fontStyle: "italic"
              }}
              href="https://www.instagram.com/nomadbouldering"
            >
              nomadbouldering
            </a>
            <br />
            Facebook:{" "}
            <a
              style={{
                color: "#000",
                cursor: "pointer",
                textDecoration: "none",
                fontStyle: "italic"
              }}
              href="https://www.facebook.com/Nomadboulderinggym"
            >
              nomadboulderinggym
            </a>
            <br />
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default withStyles(styles)(Footer);
