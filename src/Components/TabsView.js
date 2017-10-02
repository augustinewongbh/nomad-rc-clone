import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";
import Grid from "material-ui/Grid";
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper
  }
});

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}

class TabsView extends Component {
  state = {
    value: 0,
    content: this.props.tabcontent[0] || ""
  };

  handleChange = (event, value) => {
    const content = this.props.tabcontent[value];
    this.setState({ value, content });
  };
  //Map both <Tab label/> and <TabContainer/>
  render() {
    const { classes, labels, tabcontent } = this.props;
    const { value, content } = this.state;
    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {labels.map(label => <Tab key={label} label={label} />)}
        </Tabs>
        <Grid container align="center" justify="center">
          <Grid item>
            <TabContainer>{content}</TabContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(TabsView);
