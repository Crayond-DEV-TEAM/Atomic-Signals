import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)(({ theme, disabled }) => ({
    "& .MuiOutlinedInput-input": {
        padding: "10px 0px 10px 12px",
        backgroundColor: disabled ? "#F5F5F5" : ""
    },

    "& .MuiFormHelperText-root": {
        marginLeft: "0px"
    },


}))