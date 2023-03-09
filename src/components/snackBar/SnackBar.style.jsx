import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import { styled } from '@mui/material';

// export const StyledSnackBar = styled(SimpleSnackbar)(({ theme }) => ({
//     "&.MuiSnackbarContent-root": {
//         borderRadius: "12px !important",
//         backgroundColor: "red"
//     }
// }));

export const snackbarStyles = {
    snackMessage: {
        "& .MuiSnackbarContent-root": {
            borderRadius: "12px",
            boxShadow: "none",
            backgroundColor: "#CEF3E4",
            color: "#353448",
            border: "1px solid #7FDCA4",
            fontWeight: "600"
        }
    }
};

export default function Snackbars({ open, autoHideDuration, message, handleClose }) {

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            message={message}
            action={action}
            sx={snackbarStyles?.snackMessage}
        />
    );
}


