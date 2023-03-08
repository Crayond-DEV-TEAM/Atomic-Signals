import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import { Tab_style } from "./style";
import PropTypes from "prop-types";


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
export const TabsChange = ({ disabled, lable }) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={Tab_style.tabContaier}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {
                tabLable.map((tab, index) => (
                  <Tab label={tab?.label} value={tab?.id} sx={{ ...Tab_style.tabLableSx, color: disabled === true ? "#B9B9B9" : "" }} key={index} />
                ))
              }
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

TabsChange.propTypes = {
  disabled: PropTypes.bool,

  tabLable: PropTypes.arrayOf(

    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,

    })
  ),
};
