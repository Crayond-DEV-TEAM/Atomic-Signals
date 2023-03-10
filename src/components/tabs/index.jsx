import * as React from 'react';
// import TabPanel from '@mui/lab/TabPanel';
import { ContainerBox, TabBox, TabComponent, TabContextTabs, TabListComponent } from "./style";
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
      <TabBox>
        <TabContextTabs value={value}>
          <ContainerBox>
            <TabListComponent onChange={handleChange} aria-label="lab API tabs example">
              {
                tabLable.map((tab, index) => (
                  <TabComponent label={tab?.label} value={tab?.id} sx={{color: disabled === true ? "#B9B9B9" : "" }} key={index} />
                ))
              }
            </TabListComponent>
          </ContainerBox>
          {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
        </TabContextTabs>
      </TabBox>

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
