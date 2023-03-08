export const SignalInput_style = {
    SignalInputStyled: {
        borderRadius: '4px',
        border: "1px solid #EBEBEB",
        '& .MuiInputBase-root': {
            paddingLeft: "7px",
            paddingRight: "1px"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#49C792"
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                border: "1.2px solid #EBEBEB",
                borderColor: '#CACACA',
            },
        },
    },
    startAdornmentsx: {
        "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
            borderRight: "1px solid #49C792"
        },
        padding: "5px 2px ",
        height: "100%",
        cursor: "pointer",
        paddingRight: "7px"
    },
    dividerSx: {
        "$ .MuiDivider-root :focus": {
            borderRight: "1px solid #49C792"
        },
        '&:active':{
            borderColor:"red"
        },
        marginLeft: "6px", height: '41px',
        width: '4px',
        marginTop: '-4px',
        color: '#49C792'
    },
    errorBox:{ 
        position: "absolute",
         top: "2px", 
         left: "70px" 
        },
    lableSx:{ 
        fontSize: "13px", 
        color: "#353448", 
        opacity: 1 
    },
    errorText:{
         fontSize: "11px",
         color: "#F44F5A" 
    }
};
