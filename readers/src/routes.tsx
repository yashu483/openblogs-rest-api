import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { Homepage } from "@/pages/Homepage";
import { Posts } from "./pages/Posts";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
