import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Revisar por que no pasa las props// Functional Components ? o tipado ?

const useStyles = makeStyles(theme => ({
  root: {
    margin: 16,
  },
}));

export function BasicTextFields(props) {
  const { inputValue, setInputValue } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Organization"
        variant="outlined"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
    </Box>
  );
}
