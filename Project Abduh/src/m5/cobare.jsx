import React from 'react';

// Atoms
const Input = ({ type, placeholder, value, onChange }) => (
  <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

// Molecules
const FormField = ({ label, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

// Organisms
const RegistrationForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ firstName, secondName, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="First Name" type="text" placeholder="Fill The First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <FormField label="Second Name" type="text" placeholder="Fill The Second Name" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
      <FormField label="Email" type="email" placeholder="Fill Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" placeholder="Fill Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Register</Button>
    </form>
  );
};

// Templates
const RegistrationPage = () => (
  <div>
    <h1>Register</h1>
    <p>Silahkan Registrasi terlebih dahulu</p>
    <RegistrationForm onSubmit={(data) => console.log('Form data:', data)} />
    <p>Sudah punya akun? <a href="#">Login</a></p>
  </div>
);

export default RegistrationPage