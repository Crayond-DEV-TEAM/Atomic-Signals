import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import { chipStyle } from './style';
import { Box } from '@mui/material';

export function Chips({ variant, disabled, children = "", ...rest }) {

    return (
        <Box>
            <Chip disabled={disabled} variant={variant} sx={chipStyle.boxSx} {...rest}>
                {children}
            </Chip>
        </Box >
    );
}



Chips.propTypes = {
    children: PropTypes.string,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined"]),
    disabled: PropTypes.bool

};

Chips.defaultProps = {
    variant: "outlined",
    disabled: false,
};


export default Chips;


