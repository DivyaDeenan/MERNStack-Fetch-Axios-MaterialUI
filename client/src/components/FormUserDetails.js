import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange, pink } from '@material-ui/core/colors';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    secondary: orange,
    primary:pink
 
  },
  
});

export class FormUserDetails extends Component {
  getStyle = () => {
    return {
      background: 'black',
     
    }
  }
 

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            
            <AppBar position="static"  color="secondary"><h1>Enter User Details</h1>
       
      </AppBar>
    
                       
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
							fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
							fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
							fullWidth={true}
            />
            <br />
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

export default FormUserDetails;
