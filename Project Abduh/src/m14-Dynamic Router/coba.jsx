// rutedinamis
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useParams,
// } from "react-router-dom";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const router = createBrowserRouter([
//   {
//     path: "/:id",
//     element: <PostDetail />,
//   },
// ]);

// function PostDetail() {
//   const { id } = useParams(); 
//   const [post, setPost] = useState(null); 
//   useEffect(() => {
    
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(({ data }) => setPost(data))
//       .catch(console.error); 
//   }, [id]); 
//   console.log(post);
//   if (!post) {
//     return <p>Loading...</p>; 
//   }
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">{post.title}</h1>
//       <p className="text-lg">{post.body}</p>
//     </div>
//   );
// }

export function PostDetail2() {
  return <RouterProvider router={router} />;
}

// useparams

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailProduct />,
  },
  {
    path: "/:id",
    element: <DetailProduct />,
  },
]);

function DetailProduct() {
  const { id } = useParams();
  return (
    <div>
      <h1>Id Product: {id}</h1>
    </div>
  );
}

export default function CobauseParams() {
  return <RouterProvider router={router} />;
}