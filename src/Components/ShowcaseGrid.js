import React from "react";
import { withStyles } from "material-ui/styles";
import { GridList, GridListTile } from "material-ui/GridList";

const styles = {
  root: {}
};
const imgArray = [...Array(11).keys()];
function ShowcaseGrid(props) {
  const { classes } = props;
  return (
    <GridList cols={4} cellHeight={110}>
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
