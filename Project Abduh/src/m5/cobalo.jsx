import React from 'react';

// Atoms
const Input = ({ label, type, placeholder, ...props }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input type={type} placeholder={placeholder} {...props} />
  </div>
);

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

// Molecules
const LoginForm = () => (
  <form>
    <Input label="Username" type="text" placeholder="Fill The Username" />
    <Input label="Password" type="password" placeholder="Fill The Password" />
    <Button type="submit">Login</Button>
  </form>
);

// Organisms
const LoginSection = () => (
  <div>
    <h2>Login</h2>
    <p>Selamat datang di website kami</p>
    <LoginForm />
    <p>Belum punya akun? <a href="#">Register</a></p>
  </div>
);

// Templates
const App = () => (
  <div>
    <LoginSection />
  </div>
); 

export default App;  