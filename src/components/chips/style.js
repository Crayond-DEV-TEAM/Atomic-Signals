import { Chip, styled } from '@mui/material';

export const StyledChip = styled(Chip)(() => ({
        border: "1px solid #EBEBEB",
        opacity: 1,
        cursor: "pointer",
        padding: "4px",
        '&.MuiChip-outlined': {
            borderRadius: "4px",
            "&:hover": {
                background: "#EEFBF6"
            },
            "&:active": {
                background: "#EEFBF6 0% 0% no-repeat padding-box",
                border: "1px solid #49C792"
            }
        },
        '&.Mui-disabled': {
            background: "#B9B9B9",
            color: "#FFFFFF"
        }

    }))