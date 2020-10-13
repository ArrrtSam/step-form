import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

const Success = () => {
  return (
    <MuiThemeProvider>
      <AppBar title='Success' />
      <h1>Thank you for Your Submission</h1>
    </MuiThemeProvider>
  );
};

export default Success;
