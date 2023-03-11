import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { StyledAvatar, StyledFeedbackChip } from './style';



const FeedbackChips = ({ label, avatarName, onChange }) => {

  return (
    <Stack direction="row" spacing={1}>
      <StyledFeedbackChip onChange={onChange}
        avatar={<StyledAvatar>{avatarName}</StyledAvatar>}
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