import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage/HomePage";
import App from "@/App";
import Auth from "@/pages/Auth/Auth.layout";
import SignIn from "@/pages/Auth/SignIn/SignIn";
import SignnUp from "@/pages/Auth/SignUp/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/board", element: <App /> },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "signin", element: <SignIn /> },
      {
        path: "signup",
        element: <SignnUp />,
      },
    ],
  },
]);

export default router;
