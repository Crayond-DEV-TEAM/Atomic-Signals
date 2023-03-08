export const Tab_style = {
    tabContSx: {
        borderRadius: '4px',
        color: "#71707E",
        border: "1px solid #EBEBEB",
        '& .MuiInputBase-root': {
            paddingLeft: "7px",
            paddingRight: "1px"
        },
    },
    tabLableSx: {
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
    },
    tabContaier: {
        borderBottom: 1,
        borderColor: 'divider',
    }

}
