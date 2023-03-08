export const SignalInput_style = {
    SignalInputStyled: {
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
                borderRight: "1px solid #49C792"
            }
        },
    },
    startAdornmentsx: {
        padding: "5px 2px ",
        height: "100%",
        cursor: "pointer",
        paddingRight: "7px"
    },
    dividerSx: {
        borderRight:"1px solid #EBEBEB", 
        marginLeft: "6px",
        height: '54px',
        width: '4px',
        marginTop: '-11px',
    },
    errorBox: {
        position: "absolute",
        top: "26px",
        left: "82px"
    },
  
    errorText: {
        fontSize: "11px",
        color: "#F44F5A",
    }
};
