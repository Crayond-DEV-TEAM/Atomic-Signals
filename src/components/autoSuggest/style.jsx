
import { Avatar, Box, styled, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const SuggestInput = styled(TextField)(({ theme }) => ({
    "& .MuiAutocomplete-input": {
        color: "#353448",
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            border: "1.5px solid #CACACA",
        },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#49C792",
    },
    "& .MuiFormHelperText-root": {
        marginLeft: "0px",
    },
}))

export const SuggestInutLable = styled(Typography)(({ theme }) => ({

    color: "#484759",
    marginBottom: "3px",
    fontSize: "13px"
}))

export const AutoSuggest = styled(Autocomplete)(({ theme }) => ({
    width: "300px",
    borderColor: "#CACACA",
    "& .MuiAutocomplete-input": {
        color: "#353448",
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            border: "1.5px solid #CACACA",
        },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#49C792",
    },
    "& .MuiFormHelperText-root": {
        marginLeft: "0px",
    },

}))

export const SelectBoxContainer = styled(Box)(({ theme }) => ({
    display: "flex", 
    direction: "row", 
    alignItems: "center",
}))

export const SelectBoxChild = styled(Box)(({ theme }) => ({
    height: "30px",
    width: "100px",
     backgroundColor: "#F5F5F5", 
     borderRadius: "16px", 
     border: "1px solid #CACACA", 
     display: "flex", 
     direction: "row", 
     justifyContent: "space-between",
      alignItems: "center", 
      padding: "0px 5px 0px 2px"
}))


export const AvthorProfile = styled(Avatar)(({ theme }) => ({
    backgroundColor: "red",
    height: "28px",
    width: "28px"
}))

export const ProfileLable = styled(Typography)(({ theme }) => ({
    fontSize:"10px",
    color:"#353448"
}))