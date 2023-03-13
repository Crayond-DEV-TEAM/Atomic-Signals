import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {
  ErrorBox,
  ErrorText,
  DividerLine,
  InputAdornmentFeild,
  TextFieldInput,
} from "./style";
import DeleteIcon from "../../assets/deleteIcon";
import Neutral from "../../assets/neutral";
import NegativeAicon from "../../assets/negativeA";
import NegtiveBicon from "../../assets/negativeB";
import NegtiveCicon from "../../assets/negativeC";
import PositiveBicon from "../../assets/positiveB";
import PositiveAicon from "../../assets/positiveA";
import PositionCicon from "../../assets/PositiveCicon";
import { size } from "lodash";
import { Typography } from "@mui/material";

const gradeImages = {
  "-3": <NegtiveCicon />,
  "-2": <NegtiveBicon />,
  "-1": <NegativeAicon />,
  0: <Neutral />,
  1: <PositiveAicon />,
  2: <PositiveBicon />,
  3: <PositionCicon />,
};

export const SignalInput = ({
  id,
  placeholder,
  grade,
  value,
  onChange,
  onClear,
  error=true,
  fullWidth,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ position: "relative" }}>
        <TextFieldInput
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          fullWidth={fullWidth}
          InputProps={{
            startAdornment: (
              <InputAdornmentFeild position="start">
                {grade !== undefined && gradeImages[grade]}
                <DividerLine
                  sx={{ borderColor: error ? "#F44F5A" : "#CACACA" }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              </InputAdornmentFeild>
            ),
            endAdornment: value.length ? (
              <InputAdornmentFeild
                position="start"
                onClick={onClear}
                sx={{ cursor: "pointer" }}
              >
                <DeleteIcon />
              </InputAdornmentFeild>
            ) : null,
          }}
          variant="outlined"
        />
        {error == true ? (
          <ErrorBox>
            <ErrorText>Error text</ErrorText>
          </ErrorBox>
        ) : (
          ""
        )}
      </Box>
    </React.Fragment>
  );
};

SignalInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  grade: PropTypes.oneOf([-3, -2, -1, 0, 1, 2, 3]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

SignalInput.defaultProps = {
  id: "SignalInput",
  placeholder: "Type signal name",
  grade: 0,
  value: "",
  onChange: () => {},
  onClear: () => {},
  error: "",
  fullWidth: false,
};
