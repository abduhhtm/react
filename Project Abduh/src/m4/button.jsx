import React from 'react';
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: '#f1c40f',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    {text}
  </button>
);
export default Button;