import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => history.push('')}
          >
            Ricky Morty Api
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
