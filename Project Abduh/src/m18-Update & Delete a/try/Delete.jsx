import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DeleteUser=() => {
    const [userId, setUserId] = useState("");
    const [massage, setMassage] = useState("");

const handleDeleteUser = (e) => {
    e.preventDefault();

    axios
    delete(`https://api.escuelajs.co/api/v1/users/${userId}`)
    .then(() => setMassage(`✅ User deleted successfully`))
    .catch((error) => setMassage(`❌ Error: ${error.message}`));


    setUserId("");
  };
}