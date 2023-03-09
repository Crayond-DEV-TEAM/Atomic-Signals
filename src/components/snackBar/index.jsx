
import PropTypes from "prop-types";
import Snackbars from "./SnackBar.style";

const SnackBar = ({ message, autoHideDuration, isOpen, ...restProps }) => {
    return (
        <Snackbars message={message} autoHideDuration={autoHideDuration} open={isOpen} />
    );
}

SnackBar.propTypes = {
    message: PropTypes.string,
    autoHideDuration: PropTypes.number,
    isOpen: PropTypes.bool
};

SnackBar.defaultProps = {
    message: '',
    isOpen: false,
};


export default SnackBar;