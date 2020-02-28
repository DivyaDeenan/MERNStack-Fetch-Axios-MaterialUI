import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { orange, pink } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    secondary: orange,
    primary:pink
 
  },
});

export class FormPersonalDetails extends Component {
  getStyle = () => {
    return {
      background: 'black',
     
    }
  }
 
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
        <Dialog 
            open={true}
            fullWidth={true}
            maxWidth='sm'
            style={this.getStyle()}
          >
            <AppBar position="static" color="secondary"><h1>Enter Personal Details</h1></AppBar>
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
							fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
							fullWidth={true}
            />
            <br />
        
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
