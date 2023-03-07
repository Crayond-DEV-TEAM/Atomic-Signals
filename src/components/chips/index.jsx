import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import { chipStyle } from './style';
import { Box, Typography } from '@mui/material';

export function Chips({ variant, children = "", subChildren = '', ...rest }) {

    const [toggle, setToggle] = useState(true)
    return (
        <Box onClick={() => setToggle(!toggle)}>
            {!toggle && <Typography sx={chipStyle.typeSx}>3 days</Typography>
            }
            {toggle && <Chip variant={variant} sx={chipStyle.boxSx} {...rest}>
                {children}
            </Chip>
            }

        </Box >
    );
}



Chips.propTypes = {
    children: PropTypes.string,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined"]),


};


export default Chips;


