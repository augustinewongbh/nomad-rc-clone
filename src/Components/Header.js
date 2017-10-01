import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import logo from "../Static/logo.png";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {},
  flex: {
    flex: "auto",
    flexGrow: "initial",
    textAlign: "center",
    padding: "1em 0"
  },
  menuButton: {}
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoheight: 6,
      headerPos: "static"
    };
  }
  handleScroll = e => {
    e.srcElement.body.scrollTop > 100
      ? this.setState({ logoheight: 2, headerPos: "static" }) //temporary change to static from fixed till hero is modded
      : this.setState({ logoheight: 6, headerPos: "static" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar
        className={classes.root}
        style={{ backgroundColor: "#FAFAFA" }}
        position={this.state.headerPos}
      >
        <Toolbar>
          <SideNav />

          <div
            className={classes.flex}
            style={{ width: "100%", height: `${this.state.logoheight}em` }}
          >
            <Link to="/">
              <img src={logo} alt="logo" style={{ maxHeight: "100%" }} />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
