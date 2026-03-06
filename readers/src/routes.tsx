import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { Homepage } from "@/pages/Homepage";
import { Posts } from "@/pages/Posts";
import { LogIn } from "@/pages/LogIn";
import { SignUp } from "@/pages/SignUp";
import { Post } from "@/pages/Post";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "single",
        element: <Post />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
