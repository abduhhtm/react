import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { BookDetail } from "./cabang1";
  import BookList from "./cabang1";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />,
    },
    {
      path: "/:id",
      element: <BookDetail />,
    },
  ]);
  
  export function TokoBuku() {
    return <RouterProvider router={router} />;
  }
  
