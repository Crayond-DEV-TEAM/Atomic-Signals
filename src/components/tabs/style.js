import { Box, styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export const TabBox = styled(Box)(({ theme }) => ({
    width: '100%'
}))

export const AntTabs = styled(Tabs)(({ theme }) => ({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: "#665CD7",
      borderRadius: "2px 2px 0px 0px",
      height: "2px",
    },
    '&.MuiButtonBase-root-MuiTab-root':{
      padding:"0px 0px"
    }
}))

export const AntTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    color: '#71707E',
    '&.Mui-selected': {
        color: '#353448',
        fontSize: '14px',
        fontWeight: "500",
        left: "1px",
    },
}))

 