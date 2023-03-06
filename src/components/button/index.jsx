import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';


const Button = ({ variant, children, ...restProps }) => {
  return (
    <StyledButton variant={variant} {...restProps}>
      {children}
    </StyledButton>
  );
};


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button Types
   */
  variant: PropTypes.oneOf(["contained", "outlined", "disabled"]),
  /**
   * Name of the button text
   */
  children: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  startDate: PropTypes.string,
};

Button.defaultProps = {
  variant: "contained",
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};



export default Button;