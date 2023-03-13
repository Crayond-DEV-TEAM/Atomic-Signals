import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledSearchBox } from "./Search.style";

const SearchField = ({ value, onClear, ...restProps }) => {
  return (
    <StyledSearchBox
      {...restProps}
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment onClick={value?.length > 0 ? onClear : () => {}}>
            {value?.length > 0 ? <ClearIcon /> : ""}
          </InputAdornment>
        ),
      }}
    />
  );
};

SearchField.propTypes = {
  variant: PropTypes.oneOf(["outlined"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

SearchField.defaultProps = {
  variant: "outlined",
  placeholder: "Search by",
  value: "",
  onChange: () => {},
  onClear: () => {},
  disabled: false,
  fullWidth: false,
};

export default SearchField;
