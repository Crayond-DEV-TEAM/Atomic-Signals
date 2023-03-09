import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from '@mui/material/Slider';
import { sliderStyle } from './style';

export function DiscreteSlider({ disabled, onChange, getAriaValueText, value, marks, step, name, defaultValue }) {
  return (
    <Box sx={{ width: "452px" }}>
      <Slider sx={sliderStyle.lineSx}
        getAriaValueText={getAriaValueText}
        marks={marks}
        step={step}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
      <Typography sx={sliderStyle.typeSX}>{name}</Typography>
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