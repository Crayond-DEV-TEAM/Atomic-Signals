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
        ...lightTheme,
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
