import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

const Button = ({ variant, children, ...restProps }) => {
  return (
    <StyledButton variant={variant} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button Types
   */
  variant: PropTypes.oneOf(["contained", "outlined"]),
  /**
   * Name of the button text
   */
  children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: "Button",
  variant: "contained",
  primary: false,
  size: "medium",
  onClick: undefined,
  disabled: false,
};

export default Button;
