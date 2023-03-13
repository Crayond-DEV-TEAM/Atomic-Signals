import * as React from 'react';
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { AntTab, AntTabs, TabBox } from './style';

const tabLable = [
  {
    id: 1,
    label: "From me (2)"
  },
  {
    id: 2,
    label: "To me (5)"
  },
  {
    id: 3,
    label: "Other feedbacks"
  },
]



export  const TabsChange =({ disabled = true})=>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabBox>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          {
            tabLable.map((tab,i)=>(<AntTab key={i} label={tab?.label}  sx={{color: disabled === true ? "#B9B9B9" : "" }}/>))
          }
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
   </TabBox>
  );
}

TabsChange.propTypes = {
   disabled: PropTypes.bool,

   tabLable: PropTypes.arrayOf(

    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,

    })
  ),
};
