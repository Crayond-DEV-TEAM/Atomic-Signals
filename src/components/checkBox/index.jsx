import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxStyle } from './style';

const CheckboxLabel = (props) => {
    const {label, disabled,checked, onChange }=props;
    return (
        <FormGroup>
            <FormControlLabel checked={checked} onChange={onChange} control={<Checkbox disabled={disabled} sx={CheckboxStyle.boxSX} />} label={label} />
        </FormGroup>
    );
}


CheckboxLabel.propTypes = {
  label: PropTypes.string.isRequired,
  disabled:PropTypes.bool,
  checked:PropTypes.bool,
  onChange:PropTypes.func
};

CheckboxLabel.defaultProps = {
    disabled:false,
  };


export default CheckboxLabel;