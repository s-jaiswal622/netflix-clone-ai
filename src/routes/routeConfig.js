import { lazy } from "react";

const Login = lazy(() => import("../component/Login"));
const Browse = lazy(() => import("../component/Browse"));

const routeConfig = [
  {
    path: "/",
    component: Login,
    isProtected: false,
  },
  {
    path: "/browse",
    component: Browse,
    isProtected: true,
  },
];

export default routeConfig;