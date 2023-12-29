import React from 'react';

const Input = ({ onChange, value, type ='text', placeholder, name }) => (
  <input
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
    name={name}
  />
);

export default Input;