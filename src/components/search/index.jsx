import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchBox } from './Search.style';


const SearchField = ({ variant, type, ...restProps }) => {
    return (
        <StyledSearchBox type={type} variant={variant} {...restProps} InputProps={{
            startAdornment: (
                <InputAdornment>
                    <SearchIcon />
                </InputAdornment>
            )
        }} />
    );
};


SearchField.propTypes = {
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    classes: PropTypes.object,
    type: PropTypes.string,
};

SearchField.defaultProps = {
    variant: 'outlined',
    disabled: false,
    placeholder: "",
    fullWidth: false,
};



export default SearchField;
