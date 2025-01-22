import axios from "axios";
import React, { useEffect, useState } from "react";
export function CobaAxios() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
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
