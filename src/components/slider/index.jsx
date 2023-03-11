import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSlider, StyledTypography } from './style';

export function DiscreteSlider({ disabled, onChange, getAriaValueText, value, marks, step, name, defaultValue }) {
  return (
    <Box sx={{ width: "452px" }}>
      <StyledSlider
        getAriaValueText={getAriaValueText}
        marks={marks}
        step={step}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
      <StyledTypography>{name}</StyledTypography>
    </Box>
  )
}



DiscreteSlider.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  marks: PropTypes.array,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  name: PropTypes.string
};

DiscreteSlider.defaultProps = {
  name: "Neutral",
  onChange: undefined,
  defaultValue: 49.98,
  step: 16.66,
};

export default DiscreteSlider;