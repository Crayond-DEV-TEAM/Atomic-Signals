import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelectChip } from './style';
import { Box, ToggleButtonGroup } from '@mui/material';

export function SelectedChips({ disabled, onChange, selected, children = "", ...rest }) {


    return (
        <Box>
            <ToggleButtonGroup onChange={onChange}>
                <StyledSelectChip disabled={disabled} {...rest} selected={selected}>{children}</StyledSelectChip>
            </ToggleButtonGroup>
        </Box >
    );
}



SelectedChips.propTypes = {
    children: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onChange:PropTypes.func

};

SelectedChips.defaultProps = {
    disabled: false,
    selected:false
};


export default SelectedChips;


