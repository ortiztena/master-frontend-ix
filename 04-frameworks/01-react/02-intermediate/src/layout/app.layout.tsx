import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const AppLayout: React.FC = ({ children }) => (
  <div>
    <Box sx={{ flexGrow: 1 }}>
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
