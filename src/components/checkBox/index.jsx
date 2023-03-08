import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxStyle } from './style';

const CheckboxLabel = ({label, disabled }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox disabled={disabled} sx={CheckboxStyle.boxSX} />} label={label} />
        </FormGroup>
    );
}


CheckboxLabel.propTypes = {

  label: PropTypes.string.isRequired,
  disabled:PropTypes.bool,
};



export default CheckboxLabel;