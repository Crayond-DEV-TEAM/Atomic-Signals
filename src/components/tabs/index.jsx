import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import {Tab_style} from "./style";

export const TabsChange = ({}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <React.Fragment>
         <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box sx={Tab_style.tabContaier}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="From me (2)" value="1" sx={Tab_style.tabLableSx}/>
            <Tab label="To me (5)" value="2"  sx={Tab_style.tabLableSx}/>
            <Tab label="Other feedbacks" value="3" sx={Tab_style.tabLableSx} />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>

        </React.Fragment>
    )
}

// TabsChange.propTypes = {

//     size: PropTypes.oneOf(["small", "medium", "large"]),

//     error: PropTypes.bool,

//     fullWidth: PropTypes.bool,

//     value: PropTypes.string,

//     handleClose: PropTypes.func,

//     onClick: PropTypes.func,

//     onChange: PropTypes.func,
// };
