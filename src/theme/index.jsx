import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import lightTheme from "./lightTheme";
// import darkTheme from "./darkTheme";

// TODO:(Priority:Low)- Add a context deciding which team to use.
let theme = createTheme(lightTheme);

theme = responsiveFontSizes(theme);

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
