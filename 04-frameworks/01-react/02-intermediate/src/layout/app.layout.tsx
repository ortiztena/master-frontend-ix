import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const AppLayout: React.FC = ({ children }) => (
  <div>
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Github Organization Members
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {children}
  </div>
);
