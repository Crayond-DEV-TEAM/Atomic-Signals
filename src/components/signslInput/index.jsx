import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { ErrorBox, ErrorText,DividerLine,InputAdornmentFeild,TextFieldInput } from "./style";
import DeleteIcon from "../../assets/deleteIcon";
import Neutral from "../../assets/neutral";
import NegativeAicon from "../../assets/negativeA";
import NagtiveBicon from "../../assets/negativeB";
import NagtiveCicon from "../../assets/negativeC";
import PositiveBicon from "../../assets/positiveB";
import PositiveAicon from "../../assets/positiveA";
import PositionCicon from "../../assets/PositiveCicon";

const gradeImages = {
    "-3": <NegativeAicon />,
    "-2": <NagtiveBicon />,
    "-1": <NagtiveCicon />,
    0: <Neutral />,
    1: <PositiveAicon />,
    2: <PositiveBicon />,
    3: <PositionCicon />,
};
export const SignalInput = ({onChange = () => false, handleClose = () => false, value, fullWidth, error = false, size = "small" }) => {
  
    return (
        <React.Fragment>
            <Box sx={{ position: "relative" }}>

                <TextFieldInput
                    gradeImages={gradeImages}
                    fullWidth={fullWidth}
                    id="SignalInput"
                    size={size}
                    onChange={onChange}
                    value={value}
                    error={error}
                    placeHolder="Type signal name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornmentFeild position="start">
                                 {gradeImages["-1"] ? <NagtiveCicon /> : <PositiveAicon />}
                               <DividerLine  sx={{ borderColor: error ? "#F44F5A":"#CACACA"}} orientation="vertical" variant="middle" flexItem />
                            </InputAdornmentFeild>
                        ),
                        endAdornment: (
                            <InputAdornmentFeild  position="start" onClick={handleClose} sx={{ cursor: "pointer" }}>
                                <DeleteIcon />
                            </InputAdornmentFeild>
                        ),
                    }}
                    variant="outlined"
                />
                {
                        error == true ?
                        <ErrorBox>
                            <ErrorText >Error text</ErrorText>
                        </ErrorBox> : ""
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
