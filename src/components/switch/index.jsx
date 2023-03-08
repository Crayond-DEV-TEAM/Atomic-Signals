import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IOSSwitch from "./Switch.style";
import PropTypes from "prop-types";
// import { Switch } from "@mui/material";

const IosSwitch = ({ disabled, ...restProps }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<IOSSwitch disabled={disabled} sx={{ m: 1 }} />} label="Label" />
        </FormGroup>
    );
}

IosSwitch.propTypes = {
    disabled: PropTypes.bool,
};

export default IosSwitch;