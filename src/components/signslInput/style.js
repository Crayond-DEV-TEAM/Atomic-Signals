import { Box, styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography'


export const TextFieldInput = styled(TextField)(({ theme }) => ({
overflow: "hidden",
borderRadius: '4px',
border: "1px solid #EBEBEB",
'& .MuiInputBase-root': {
    paddingLeft: "7px",
    paddingRight: "3px"
},
"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#49C792",
},
'& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
        border: "1.5px solid #CACACA",
    },
},
"& .MuiOutlinedInput-root.Mui-focused": {
    "& .MuiDivider-root": {
        borderRight: "1.5px solid #49C792"
    }
},
}))

export const InputAdornmentFeild = styled(InputAdornment)(({ theme }) => ({
    padding: "5px 2px ",
    height: "100%",
    cursor: "pointer",
    paddingRight: "7px"
}))
export const DividerLine = styled(Divider)(({ theme }) => ({
    borderRight:"1px solid #EBEBEB", 
    marginLeft: "6px",
    height: '54px',
    width: '4px',
    marginTop: '-11px',
}))
export const ErrorText = styled(Typography)(({ theme }) => ({
       fontSize: "11px",
        color: "#F44F5A",
}))
export const ErrorBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "26px",
    left: "82px"
}))

