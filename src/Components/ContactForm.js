import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import SendIcon from "material-ui-icons/Send";
const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    textAlign: "center"
  },
  button: {
    margin: "24px 16px"
  }
});

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      message: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    alert("Thanks for contacting us!");
    this.setState({
      firstName: "",
      email: "",
      message: ""
    });
    return;
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2em",
          margin: "0"
        }}
      >
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                onChange={this.handleChange("firstName")}
                value={this.state.firstName}
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                onChange={this.handleChange("email")}
                value={this.state.email}
                margin="normal"
                fullWidth
                required
                type="email"
              />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                InputProps={{ placeholder: "Drop us a line" }}
                fullWidth
                multiline
                margin="normal"
                onChange={this.handleChange("message")}
                value={this.state.message}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button
                raised
                color="accent"
                type="submit"
                className={classes.button}
              >
                <SendIcon />Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(ContactForm);
