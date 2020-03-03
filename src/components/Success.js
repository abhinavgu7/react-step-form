import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List'

export class Success extends Component {
    
    render() {
        

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"></AppBar>
                    <h1>Thank you for submitting your details</h1>
                    <p>You will getting an email with further details</p>
                    
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}


export default Success
