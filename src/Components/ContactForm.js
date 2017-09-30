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
    width: "100%"
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
      lastName: "",
      message: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    alert(JSON.stringify(this.state));
    this.setState({
      firstName: "",
      lastName: "",
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
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                onChange={this.handleChange("firstName")}
                value={this.state.firstName}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                onChange={this.handleChange("lastName")}
                value={this.state.lastName}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
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
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button
                raised
                color="primary"
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
