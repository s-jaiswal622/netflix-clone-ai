import Browse from "../component/Browse";
import Login from "../component/Login";

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