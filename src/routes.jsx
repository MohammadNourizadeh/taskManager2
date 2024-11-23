import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";

const routes = [
  {
    path: "/",
    element: <Navigate to={"/admin"} />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
];

export { routes };
