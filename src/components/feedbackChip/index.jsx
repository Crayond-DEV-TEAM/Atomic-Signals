import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FeedbackChipSX } from './style';



const FeedbackChips = ({ label, avatarName, onChange }) => {

  return (
    <Stack direction="row" spacing={1}>
      <Chip onChange={onChange}
        avatar={<Avatar sx={FeedbackChipSX.avatarSx}>{avatarName}</Avatar>}
        label={label} />
    </Stack>
  )

};


FeedbackChips.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  avatarName: PropTypes.string.isRequired
};

FeedbackChips.defaultProps = {
  label: "Very good",
  avatarName: "E"
};



export default FeedbackChips;