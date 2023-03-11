import React from 'react';
import PropTypes from 'prop-types';
import { StyledChip } from './style';
import { Box } from '@mui/material';

export function Chips({ variant, disabled, children = "", ...rest }) {

    return (
        <Box>
            <StyledChip disabled={disabled} variant={variant} {...rest}>
                {children}
            </StyledChip>
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


