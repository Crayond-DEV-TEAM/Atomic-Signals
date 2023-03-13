import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

export const StyledSearchBox = styled(TextField)(({ theme, disabled }) => ({
  "& .MuiInputBase-formControl": {
    padding: "10px 0px 10px 12px",
    backgroundColor: disabled ? "#F5F5F5" : "",
    height: "40px",
    "& .MuiOutlinedInput-input": {
      padding: "10px 12px 10px 0px",
    },
  },

  "& .MuiFormHelperText-root": {
    marginLeft: "0px",
  },

  "& .MuiSvgIcon-fontSizeMedium": {
    paddingRight: "12px",
    cursor: "pointer",
  },
}));
