import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";



export const CreateUser = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", 
    avatar: "https://i.imgur.com/LD004Qs.jpg", 
    });
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleCreateUser = (e) => {
    e.preventDefault();
    
    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(), 
      updatedAt: new Date().toISOString(), 
    };
    
    // axios
    //   .post("https://api.escuelajs.co/api/v1/users/", newUser)
    //   .then((response) => setMessage(User created: ${response.data.name}))
    //   .catch((error) => setMessage(Error: ${error.message}));
    // };

    // const newUser = {
    //   name: "John Doe",
    //   email: "john.doe@example.com", // misalnya, sesuai dengan struktur API
    // };
    
    axios
      .post("https://api.escuelajs.co/api/v1/users/", newUser)
      .then((response) => setMessage(`User created: ${response.data.name}`))
      .catch((error) => setMessage(`Error: ${error.message}`));  
    
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
      avatar: "https://i.imgur.com/LD004Qs.jpg",
    });
    
    return (
    <div>
    <h2 className="bg-blue-500 w-40 ml-2 mt-2 mb-4">Create User</h2>
    <Link to="/" className="bg-red-300 w-1/2 mx-auto mb-2">
    Back to Login
    </Link>
    <form onSubmit={handleCreateUser}>
    <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Name"
    required
    />
    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    required
    />
    <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    required
    />
    <button type="submit">Create User</button>
    </form>
    {message && <p>{message}</p>}
    </div>
    )
  }
};