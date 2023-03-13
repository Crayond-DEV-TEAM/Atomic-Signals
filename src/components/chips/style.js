import {styled, ToggleButton } from '@mui/material';

export const StyledSelectChip = styled(ToggleButton)(() => ({
        border: "1px solid #EBEBEB",
        opacity: 1,
        color:"#353448",
        cursor: "pointer",
        padding: "5px",
        textTransform:"capitalize",
        '&.MuiToggleButton-root': {
            borderRadius: "4px",
            "&:hover": {
                background: "#EEFBF6"
            },
        },
        '&.Mui-disabled': {
            background: "#B9B9B9",
            color: "#FFFFFF",
            border: "1px solid #FFFFFF",
            '&.Mui-selected':{
                background: "#B9B9B9",
                border: "1px solid #FFFFFF"
            }
        },
        '&.Mui-selected':{
                background: "#EEFBF6 0% 0% no-repeat padding-box",
                border: "1px solid #49C792"
            }

    }))