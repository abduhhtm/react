import axios from "axios";
import React, { useEffect, useState } from "react";
export function CobaAxios() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data); //then untuk nangkep respon kalo berhasil
                            
            })
            .catch((error) => {
                console.error("Error fetching data", error); //catch untuk nangkep respon kalo gagal dan akan di munculin di consol
            });
    }, []); 
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))} 
            </ul>
        </div>
    );
}
