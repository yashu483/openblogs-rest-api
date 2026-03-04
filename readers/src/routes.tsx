import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { Homepage } from "@/pages/Homepage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
