import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { orange, pink } from '@material-ui/core/colors';
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    secondary: orange,
    primary: pink

  },
});


export class Confirm extends Component {
  getStyle = () => {
    return {
      background: 'black',

    }
  }

  continue = async (e) => {
    e.preventDefault();
    // PROCESS FORM //

    // Send POST to API to add profile


    const firstName = this.props.values.firstName;
    const lastName = this.props.values.lastName;
    const email = this.props.values.email;
    const occupation = this.props.values.occupation;
    const city = this.props.values.city;
    const bio = this.props.values.bio;
    if (firstName === '' ||  lastName  === '' ||  email  === '' ||  city  === '' ||  occupation === '' ||  bio  === '') {
      alert('Please fill in fields');
    }

    const sendBody = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'city': city, 
      'occupation': occupation,
      'bio' : bio
    };
  
    try {
      const res = await fetch('/api/v1/profiles/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
     
        body : JSON.stringify(sendBody)
      });
    
      if (res.status === 500) {
        throw Error('Server Error!');
        
      }
      alert('Profile added!');
      this.props.nextStep();
    } catch (err) {
      alert(err);
      return;
    }



  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog
            open={true}
            fullWidth={true}
            maxWidth='sm'
            style={this.getStyle()}
          >
            <AppBar position="static" color="secondary"><h1>Confirm User Data</h1></AppBar>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
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
            >Confirm & Upload File</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
