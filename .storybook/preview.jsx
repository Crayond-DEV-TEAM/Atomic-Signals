import React, { useMemo } from "react";
// import { withRouter } from 'storybook-addon-react-router-v6';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import lightTheme from "../src/theme/lightTheme";
import darkTheme from "../src/theme/darkTheme";
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/700.css';

export const decorators = [
  (Story) => {
    const muiTheme = useMemo(() =>
      createTheme({
        palette: {
          primary: {
            main: "#665CD7",
            light: "#948DE3",
            contrastText: "rgba(256,256,256)",
          },
          secondary: {
            main: "#49C792",
            light: "#CEF3E4",
            contrastText: "rgba(0,0,0,0.87)",
          },
          error: {
            main: "#F44F5A",
          },
          success: {
            main: "#49C792"
          },
        },
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#EBEBEB', // set your desired idle border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CACACA', // set your desired hover border color
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#49C792', // set your desired focus border color
                },
                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CACACA'
                }
              },
            },
          },
        },
      })
    );

    return (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    );
  },
  // withRouter,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
