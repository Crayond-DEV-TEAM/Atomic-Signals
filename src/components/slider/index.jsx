import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { sliderStyle } from './style';

export function DiscreteSlider () {

    const valuetext = (value) => {
        return `${value}°C`;
      }

      const marks = [
        {
          value: 15,
        },
        {
          value: 30,
        },
        {
          value: 65,
        },
        {
          value: 80,
        },
      ];
      
    return (
        <Box sx={{ width: 300 }}>
      <Slider sx={sliderStyle.lineSx}
        aria-label="Small steps"
        defaultValue={50}
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Box>
    )
}



// Chips.propTypes = {
//     children: PropTypes.string,
//     label: PropTypes.string.isRequired,
//     variant: PropTypes.oneOf(["contained", "outlined"]),


// };

export default DiscreteSlider;