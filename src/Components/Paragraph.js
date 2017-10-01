import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    padding: "2em"
  },
  title: {
    fontSize: "2em",
    fontWeight: "600"
  }
});

function Paragraph(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography className={classes.title} type="title" color="accent">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography type="body1">{props.content}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Paragraph);
