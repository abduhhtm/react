import React from 'react';
const Text = ({ children, style }) => (
  <p style={{ ...style, color: '#333', fontSize: '14px', marginTop: '0' }}>
    {children}
  </p>
);
export default Text;