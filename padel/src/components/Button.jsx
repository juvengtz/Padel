import React from 'react';

const Button = ({ onClick, children, type = 'button', disabled = false }) => (
  <button onClick={onClick} type={type} disabled={disabled}>
    {children}
  </button>
);

export default Button;