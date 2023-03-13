import { Checkbox, styled } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)(() => ({

  '&.MuiButtonBase-root': {
    '&:hover': {
      background: "#F2F2F2"
    }
  },

  '&.Mui-checked': {
    color: "#49C792",
  },
  '&.Mui-disabled': {
    color: "#B9B9B9"
  },
  '& .MuiSvgIcon-root': {
    border: "1px"
  }
}))

