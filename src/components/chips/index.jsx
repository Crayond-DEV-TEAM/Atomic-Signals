import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import { chipStyle } from './style';
import { Box } from '@mui/material';

export function Chips({ variant, children = "",  ...rest }) {

    return (
        <Box>
            <Chip variant={variant} sx={chipStyle.boxSx} {...rest}>
                {children}
            </Chip>
        </Box >
    );
}



Chips.propTypes = {
    children: PropTypes.string,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined"]),


};


export default Chips;


