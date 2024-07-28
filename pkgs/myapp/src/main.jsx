import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import App from "./pages/App";
import Article from "./pages/Article";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/article/:id", element: <Article /> },
  { path: "/admin", element: <Admin /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
