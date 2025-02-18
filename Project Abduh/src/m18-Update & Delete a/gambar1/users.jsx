import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users") 
      .then((response) => {
        setUsers(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError("Error fetching users: " + error.message); 
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full flex justify-start mb-6">
        <Link to="/help">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-800 transition duration-300 ease-in-out transform hover:scale-105">
            Kembali
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-700 mb-6">User List</h1>

      {loading && <p className="text-lg text-blue-500">Loading users...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0
          ? users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border border-gray-300"
                />

                <h2 className="text-xl font-bold mt-2">{user.name}</h2>
                <p className="text-gray-600">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-500">
                  <strong>Password:</strong> {user.password || "********"}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  <strong>Role:</strong> {user.role}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  <strong>ID:</strong> {user.id}
                </p>
              </div>
            ))
          : !loading && <p className="text-gray-500">No users found.</p>}
      </div>
    </div>
  );
}