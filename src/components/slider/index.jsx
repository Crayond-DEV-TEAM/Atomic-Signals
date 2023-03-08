import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from '@mui/material/Slider';
import { sliderStyle } from './style';

export function DiscreteSlider({disabled}) {

  const [value, setValue] = React.useState(50);
  const [name, setName] = React.useState("Neutral")
  const valuetext = (value) => {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  if (newValue > 80) {
      setName("Impactful")
    } else {
      setName("Neutral")
    }
  };

  const marks = [
    {
      value: 0,
    },
    {
      value: 16,
    },
    {
      value: 33.32,
    },
    {
      value: 49.98,
    },
    {
      value: 66.64,
    },
    {
      value: 83.3,
    },
    {
      value: 99.96,
    }
  ];
  return (
    <Box sx={{ width: "452px" }}>
      <Slider sx={{...sliderStyle.lineSx, disabled}}
        getAriaValueText={valuetext}
        marks={marks}
        step={16.66}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <Typography sx={sliderStyle.typeSX}>{name}</Typography>
    </Box>
  )
}



DiscreteSlider.propTypes = {
//     children: PropTypes.string,
disabled: PropTypes.bool,
//     variant: PropTypes.oneOf(["contained", "outlined"]),


};

export default DiscreteSlider;