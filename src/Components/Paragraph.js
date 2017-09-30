import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    padding: "2em"
  }
});

function Paragraph(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <h1>{props.title}</h1>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <p>{props.content}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Paragraph);
