import React from 'react';
import LoginForm from '../organisms/LoginForm';
const LoginPage = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  }}>
    <LoginForm />
  </div>
);
export default LoginPage;