import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import { StyledCheckbox } from './style';

const CheckboxLabel = (props) => {
    const {label, disabled,checked, onChange }=props;
    return (
        <FormGroup>
            <FormControlLabel checked={checked} onChange={onChange} control={<StyledCheckbox disabled={disabled}/>} label={label} />
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