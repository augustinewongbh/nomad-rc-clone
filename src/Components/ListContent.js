import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import List, { ListItem, ListItemText } from "material-ui/List";
import logo from "../Static/logo.png";

const styles = {
  root: {
    justifyContent: "center",
    textAlign: "center"
  },
  linkStyle: {
    textDecoration: "none"
  }
};

function ListContent(props) {
  const { classes } = props;
  return (
    <List classes={{ root: classes.root }}>
      <ListItem className={classes.root}>
        <Link to="/">
          <img src={logo} style={{ maxHeight: "50px", paddingRight: "16px" }} />
        </Link>
      </ListItem>
      <ListItem button className={classes.root}>
        <Link className={classes.linkStyle} to="/Journey">
          <ListItemText primary="Journey" />
        </Link>
      </ListItem>
      
      <ListItem button className={classes.root}>
        <Link className={classes.linkStyle} to="/Groups">
          <ListItemText primary="Groups" />
        </Link>
      </ListItem>
      <ListItem button className={classes.root}>
        <Link className={classes.linkStyle} to="/Cafebar">
          <ListItemText primary="Cafe Bar" />
        </Link>
      </ListItem>
      <ListItem button className={classes.root}>
        <Link className={classes.linkStyle} to="/About">
          <ListItemText primary="About" />
        </Link>
      </ListItem>
    </List>
  );
}

ListContent.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ListContent);
