import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        {/* in MuiThemeProvider we have to return one div */}
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p> You Will Get An Email With Furthur Instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
