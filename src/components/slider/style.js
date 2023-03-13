import { Slider, styled, Typography } from "@mui/material";

export const StyledSlider = styled(Slider)(() => ({
  borderRadius: "20px",
  color: "black",
  "& .MuiSlider-track": {
    background: "transparent",
    border: 0,
    height: "8px",
  },
  "& .MuiSlider-rail": {
    background:
      "linear-gradient(90deg, #DE1010 0%, #F27024 15%, #F2B824 32%, #F2EB24 51%, #AEC934 70%, #4C9E29 85%, #007C32 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "8px",
  },
  "& .MuiSlider-thumb": {
    height: "32px",
    width: "32px",
    backgroundColor: "#FFFFFF",
    border: "13px solid #FFFFFF",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "&: before": {
      position: "absolute",
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      border: "10px solid #353448",
    },
  },

  "& .MuiSlider-mark": {
    height: "6px",
    width: "1px",
    backgroundColor: "#FFFFFF",
  },
  "& .Mui-disabled": {
    background: "red",
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "3px",
  textAlign: "left",
  fontSize: "14px",
  color: "#353448",
  lineHeight: "8px",
}));
