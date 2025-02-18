import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { use } from "react";

const UpdateUser = (e) => {
    const [userId, setUserId]  = useState("");
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        avatar: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
};