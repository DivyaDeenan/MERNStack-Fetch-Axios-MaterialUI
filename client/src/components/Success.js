import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { orange, pink } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    secondary: orange,
    primary:pink
 
  },
});
export class Success extends Component {
  getStyle = () => {
    return {
      background: 'black',
     
    }
  }
 
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}> 
        <React.Fragment>
        <Dialog 
            open={true}
            fullWidth={true}
            maxWidth='sm'
            style={this.getStyle()}
          >
            <AppBar position="static" color="secondary"><h1>Success</h1></AppBar>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
