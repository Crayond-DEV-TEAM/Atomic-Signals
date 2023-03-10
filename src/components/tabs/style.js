import TabContext from '@mui/lab/TabContext';
import { Box, styled } from '@mui/material';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';

export const ContainerBox = styled(Box)(({ theme }) => ({
    borderBottom: 1,
    borderColor: 'divider',
}))

export const TabBox = styled(Box)(({ theme }) => ({
    width: '100%'
}))

export const TabComponent = styled(Tab)(({ theme }) => ({
    textTransform: "math-auto",
    fontSize: '14px',
    '&.Mui-selected': {
        color: '#353448',
        fontSize: '14px',
        fontWeight: "500",
        left: "1px",
    },
    "& .MuiTabs-indicator": {
        backgroundColor: "#665CD7",
        padding: "1px",
        height: "2.3px",
    }
}))

export const TabContextTabs = styled(TabContext)(({ theme }) => ({
}))

export const TabListComponent = styled(TabList)(({ theme }) => ({
}))
    // export const TabPanelComponent = styled(TabPanel )(({ theme }) => ({
    // }))