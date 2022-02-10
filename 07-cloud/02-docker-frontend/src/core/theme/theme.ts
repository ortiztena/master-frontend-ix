import { createTheme, Theme } from '@material-ui/core/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#006A7B'
    }
  }
});

export const theme: Theme = defaultTheme;
