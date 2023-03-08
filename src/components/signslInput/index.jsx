import React from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { SignalInput_style } from "./style";
import DeleteIcon from "../../assets/deleteIcon";
import Neutral from "../../assets/neutral";
import NegativeAicon from "../../assets/negativeA";
import NagtiveBicon from "../../assets/negativeB";
import NagtiveCicon from "../../assets/negativeC";
import PositiveBicon from "../../assets/positiveB";
import PositiveAicon from "../../assets/positiveA";
import PositionCicon from "../../assets/PositiveCicon";
import Typography from "@mui/material/Typography";
import { Divider, InputAdornment } from "@mui/material";

const gradeImages = {
    "-3": <NegativeAicon />,
    "-2": <NagtiveBicon />,
    "-1": <NagtiveCicon />,
    0: <Neutral />,
    1: <PositiveAicon />,
    2: <PositiveBicon />,
    3: <PositionCicon />,
};
export const SignalInput = ({ onChange = () => false, handleClose = () => false, value, fullWidth, error = false, size = "small" }) => {

    return (
        <React.Fragment>
            <Box sx={{ position: "relative" }}>

                <TextField
                    gradeImages={gradeImages}
                    fullWidth={fullWidth}
                    sx={SignalInput_style.SignalInputStyled}
                    id="SignalInput"
                    size={size}
                    onChange={onChange}
                    value={value}
                    error={error}
                    placeHolder="Type signal name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"
                                sx={SignalInput_style.startAdornmentsx}>
                                {gradeImages["-1"] ? <NagtiveCicon /> : <PositiveAicon />}
                                <Divider sx={{ ...SignalInput_style.dividerSx, borderColor: error ? "#F44F5A" : "#CACACA" }} orientation="vertical" variant="middle" flexItem />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="start" onClick={handleClose} sx={{ cursor: "pointer" }}>
                                <DeleteIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
                {
                    error == true ?
                        <Box sx={SignalInput_style.errorBox}>
                            <Typography sx={SignalInput_style.errorText}>Error text</Typography>
                        </Box> : ""
                }
            </Box>

        </React.Fragment>
    )
}

SignalInput.propTypes = {

    size: PropTypes.oneOf(["small", "medium", "large"]),

    error: PropTypes.bool,

    fullWidth: PropTypes.bool,

    value: PropTypes.string,

    handleClose: PropTypes.func,

    onChange: PropTypes.func,
};
