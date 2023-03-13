import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { AvatarBox, FeedackBox, MainBox, StyledAvatar, StyledBox, TextContent, TextLabel} from './style';
import { Box, Typography } from '@mui/material';



const FeedbackChips = ({ label, avatarName, feedback, onChange }) => {

  return (
    <Stack direction="row" justifyContent="center" >
      <StyledBox>
        <MainBox>
          <AvatarBox>
            <StyledAvatar>{avatarName}</StyledAvatar>
          </AvatarBox>
          <FeedackBox mr={"-60px"}>
            <TextContent>{feedback}</TextContent>
          </FeedackBox>
        </MainBox>
        <TextLabel>{label}</TextLabel>
      </StyledBox>
    </Stack>


  )

};


FeedbackChips.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  avatarName: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired
};

FeedbackChips.defaultProps = {
  label: "Very good",
  avatarName: "E",
  feedback:"Efficiency"
};



export default FeedbackChips;