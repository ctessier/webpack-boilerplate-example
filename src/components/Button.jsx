import React from 'react';
import { string } from 'prop-types';

const Button = ({ children, ...props }) => (
  <button type="button" {...props}>{children}</button>
);

Button.propTypes = {
  children: string.isRequired,
};

export default Button;
