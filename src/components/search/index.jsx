import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import { StyledSearchBox } from './Search.style';


const SearchField = ({ value, onClear, ...restProps }) => {

    return (
        <StyledSearchBox {...restProps}
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment onClick={value?.length > 0 ? onClear : () => { }}>
                        {value?.length > 0 ? <ClearIcon /> : ""}
                    </InputAdornment>
                )
            }} />
    );
};


SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
};

SearchField.defaultProps = {
    variant: 'outlined',
    disabled: false,
    placeholder: "",
    fullWidth: false,
    onClear: () => { },
};



export default SearchField;
