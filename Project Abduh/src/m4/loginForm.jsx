import React from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
const LoginForm = () => {
  const handleLogin = () => {
    alert('Login button clicked');
  };
  return (
    <div style={{
      width: '300px',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Login</h2>
      <Text style={{ marginBottom: '20px' }}>selamat datang di website kami</Text>
      
      <FormField label="Username" type="text" placeholder="Fill The Username" />
      <FormField label="Password" type="password" placeholder="Fill The Password" />
      <Button text="Login" onClick={handleLogin} />
      <Text style={{ marginTop: '15px' }}>
        belum punya akun <span style={{ color: '#007bff', cursor: 'pointer' }}>Register</span>
      </Text>
    </div>
  );
};
export default LoginForm;