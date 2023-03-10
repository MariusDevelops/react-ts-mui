import { colors, createTheme } from '@mui/material';

// Sukuria temą, default temos pagrindu
const theme = createTheme({
  palette: {
    primary: {
      main: '#4e47d6',
      // main: '#38348c',
      // main: '#eb4034',
    },
    secondary: {
      main: colors.orange[500],
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;
