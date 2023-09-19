import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      primary: string;
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary: string;
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa500 '
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

export default theme;