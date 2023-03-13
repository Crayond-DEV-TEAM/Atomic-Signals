import React from "react";
import PropTypes from "prop-types";
import { StyledTextField } from "./TextField.style";

const InputField = ({ variant, ...restProps }) => {
  return <StyledTextField variant={variant} {...restProps}></StyledTextField>;
};

InputField.propTypes = {
  variant: PropTypes.oneOf(["outlined"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  classes: PropTypes.object,
};

InputField.defaultProps = {
  variant: "outlined",
  disabled: false,
  placeholder: "placeholder",
  fullWidth: false,
  isMulti: false,
  error: false,
  helperText: "",
};

export default InputField;
