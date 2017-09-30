import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ListContent from "./ListContent";

const styles = {
  listcontainer: {
    width: "100%"
  }
};

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <IconButton
          color="contrast"
          aria-label="Menu"
          onClick={this.toggleDrawer("top", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="top"
          open={this.state.top}
          onRequestClose={this.toggleDrawer("top", false)}
        >
          <div className={classes.listcontainer}>
            <ListContent />
          </div>
        </Drawer>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SideNav);
