import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import Footer from "../Components/Footer";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import List, { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
const styles = theme => ({
  paper: {
    padding: "0 2em"
  }
});

const listContent = [
  "When bouldering its important you understand how to fall correctly, fall with legs slightly apart and knees bent. Keep arms in and roll with the fall.",

  "Avoid falls with arms extended",
  "Ensure the safety of your fall zone before you climb including safety of the landing, and that it’s free of people and other potential hazards.",

  "Avoid walking and sitting under climbers.",

  "Children must be supervised.",

  "Fit to fall",

  "Use a ‘spotter’ for difficult or risky moves.",

  "Know how to ‘spot.’ Be active and poised to orient falling climber correctly onto padding.",

  "Boulder within your limits, if you don't feel confident then don’t continue on that route. Remember you can always escape onto the easy pink holds for safety. Return to a problem within your limits.",

  "Topout Boldering, only finish standing ontop of topout boulders as per demonstrated in saftey brief videos. Never jump off and always safely down climb on yellow."
];

const FAQS = [
  {
    title: "What is Bouldering?",
    content:
      "Bouldering is a fast-growing and social style of rock climbing. Climbers do not use ropes or harnesses, but scale shorter walls and are protected by a thick, padded floor. There is no equipment required to start bouldering, making it fast and easy to learn and enjoy. It is challenging and gymnastic, it builds strength and confidence, and is lots of fun!"
  },

  {
    title: "Who Is It For?",
    content:
      "Everyone can boulder, either alone or with friends. Just drop by and we will get you started right away."
  },
  {
    title: "What Do I Need To Bring?",
    content:
      "You only need comfortable clothing and sporty shoes. We recommend the use of climbing shoes and they are for rent at the front desk if you want to try them (sizes US2 to US14 available)."
  },
  {
    title: "How Will I Know What To Do?",
    content:
      "We can explain it to you in 30 seconds when you arrive. It's that simple!"
  },
  {
    title: "Is It Safe?",
    content:
      "Bouldering is the safest form of indoor climbing. The maximum height of the walls is 'only' 4.5m and the floor is covered with large thick soft mats."
  },
  {
    title: "What Facilities Do You Have?",
    content:
      "We have showers, toilets, change rooms, lockers, bicycle parking, filtered tap water, nail clippers, yoga mats, weights, climbing magazines and industrial fans."
  }
];

class NestedListItem extends Component {
  state = { open: false };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={this.props.title} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem>
            <ListItemText primary={this.props.primary} />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

function Journey(props) {
  const { classes } = props;
  const toggler = false;
  return (
    <div>
      <Header />
      <Hero
        image="https://unsplash.it/1366/768/?random"
        alt="Some random image"
      />
      <Paragraph
        title="Your Journey Starts Here"
        content="If you have never rock climbed before, drop by, have fun and join the Nomad community. You don't need any equipment, so let's get started."
      />
      <div style={{ padding: "0 2em 4em 2em" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography type="title" color="accent">
              Safety Requirements For Bouldering
            </Typography>
            <List>
              {listContent.map(item => (
                <div>
                  <ListItem>
                    <ListItemText primary={item} />
                  </ListItem>
                </div>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <Typography type="title" color="accent">
              FAQs
            </Typography>
            <List>
              {FAQS.map(item => (
                <NestedListItem title={item.title} primary={item.content} />
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Journey);
