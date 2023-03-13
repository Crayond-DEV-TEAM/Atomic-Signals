import React from "react";
import FormGroup from "@mui/material/FormGroup";
import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledCheckbox } from "./style";

const Checkbox = (props) => {
  const { label, disabled, checked, onChange } = props;
  return (
    <FormGroup>
      <FormControlLabel
        checked={checked}
        onChange={onChange}
        control={<StyledCheckbox disabled={disabled} />}
        label={label}
      />
    </FormGroup>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Checkbox;
