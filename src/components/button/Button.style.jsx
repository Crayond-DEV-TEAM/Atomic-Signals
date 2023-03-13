import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme, variant }) => ({
  fontSize: "14px",
  textTransform: "capitalize",
  backgroundColor: variant === "contained" ? theme.palette.secondary.main : "",
  color: variant === "outlined" ? theme.palette.secondary.main : "",
  border:
    variant === "outlined"
      ? `${"1.5px solid" + theme.palette.secondary.main}`
      : "",
  boxShadow: "none !important",
  "&.MuiButton-root:hover": {
    backgroundColor:
      variant === "contained"
        ? `${theme.palette.secondary.containedHover + "!important"}`
        : `${theme.palette.secondary.outlinedHover + "!important"}`,
    boxShadow: "none !important",
    border:
      variant === "outlined"
        ? `${"1.5px solid" + theme.palette.secondary.main}`
        : "",
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondary.disable,
    color: theme.palette.secondary.textColor,
  },
  "&.MuiButton-outlined.Mui-disabled": {
    backgroundColor: theme.palette.secondary.textColor,
    color: theme.palette.secondary.disable,
    border: `${"2px solid" + theme.palette.secondary.disable}`,
  },
}));
