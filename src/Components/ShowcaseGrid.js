import React from "react";
import { withStyles } from "material-ui/styles";
import { GridList, GridListTile } from "material-ui/GridList";

const styles = {
  tile: {
    width: "600px"
  }
};
const imgArray = [...Array(11).keys()];
function ShowcaseGrid(props) {
  const { classes } = props;
  return (
    <GridList className={classes.tile} cols={4} cellHeight="auto" spacing={16}>
      {imgArray.map(i => (
        <GridListTile key={i} cols={1}>
          <img
            src={`https://unsplash.it/100/?image=${Math.floor(
              Math.random() * 100
            )}`}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default withStyles(styles)(ShowcaseGrid);
