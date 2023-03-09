import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FeedbackChipSX } from './style';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';



const FeedbackChips = () => {

  const [name, setName] = useState(" Very good")
  const handleMouseOver = () => {
    setName("Very Very good")
    console.log("handleMouseOver");
  }
  const handleMouseLeave = () => {
    setName("Very good")
    console.log("handleMouseLeave");
  }
  return (
    <Stack direction="row" spacing={1}>

      <Box>

        <Box sx={{ display: "flex",overflow: "hidden", gap: "10px", alignItems: "center", background: "#F5F5F5", padding: "10px", borderRadius: "40px", width: "120px",justifyContent:"flex-end",}}>
        <Avatar  sx={FeedbackChipSX.avatarSx}>E</Avatar>
          <Box sx={{display:"none",'&:hover': {display:"block"}}}>
          <Typography>typoooo</Typography>
          </Box>
          <Box>
          <Typography>type error</Typography>
          </Box>
        </Box>
      </Box>

      
      <Box sx={{ width: "160px",display: "flex",  
    justifyContent: "flex-end" }}>
        <Chip
          sx={{ marginLeft: "50px" }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          avatar={<Avatar sx={FeedbackChipSX.avatarSx}>E</Avatar>}
          label={name} />
      </Box>

    </Stack>
  )

};


FeedbackChips.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  //   primary: PropTypes.bool,
  /**
   * What background color to use
   */
  //   backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  //   size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button Types
   */
  //   variant: PropTypes.oneOf(["contained", "outlined"]),
  /**
   * Name of the button text
   */
  //   children: PropTypes.string,
  /**
   * Button contents
   */
  //   label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  //   onClick: PropTypes.func,

  //   startDate: PropTypes.string,
};





export default FeedbackChips;