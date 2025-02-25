import { createBrowserRouter, RouterProvider, Link, useParams,} from "react-router-dom";
import { useState, useEffect } from "react";
import { BookDetail } from "./soal1map";
import BookList from "./soal1map";
  
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
  
  function TokoBuku() {
    return <RouterProvider router={router} />;
  }
  
  export default TokoBuku;