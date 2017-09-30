import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TerrainIcon from "material-ui-icons/Terrain";
import List, { ListItem, ListItemText } from "material-ui/List";

const styles = {
  root: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
};

function ListContent(props) {
  return (
    <List classes={{ root: props.classes.root }}>
      <ListItem classes={{ root: props.classes.root }} component="a" href="#">
        <TerrainIcon />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Journey" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Prices" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Classes" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Groups" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Cafe Bar" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );
}

ListContent.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ListContent);
