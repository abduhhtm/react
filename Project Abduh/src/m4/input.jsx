import React from 'react';
const Input = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    style={{
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    }}
  />
);
export default Input;