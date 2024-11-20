import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
const FormField = ({ label, type, placeholder }) => (
  <div style={{ marginBottom: '20px' }}>
    <Label text={label} />
    <Input type={type} placeholder={placeholder} />
  </div>
);
export default FormField;