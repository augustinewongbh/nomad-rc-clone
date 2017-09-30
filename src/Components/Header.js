import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import SideNav from "./SideNav";

const styles = theme => ({
  root: {
    width: "100%",
    display: "block"
  },
  flex: {
    flex: 1
  },
  menuButton: {}
});

function Header(props) {
  const classes = props.classes;
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideNav />
          <Typography type="title" color="inherit" className={classes.flex}>
            Nomad
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
