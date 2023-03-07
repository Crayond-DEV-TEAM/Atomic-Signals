const lightTheme = {
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
          '& $notchedOutline': {
            borderColor: '#000000', // set your desired idle border color
          },
          '&:hover $notchedOutline': {
            borderColor: '#FF0000', // set your desired hover border color
          },
          '&$focused $notchedOutline': {
            borderColor: '#00FF00', // set your desired focus border color
          },
        },
      },
    },
  },
};

export default lightTheme;
