import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import MyDayPage, { fetchData } from "./pages/myDayPage/MyDayPage";

const routes = [
  {
    path: "/",
    element: <Navigate to={"/admin/my-day"} />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/my-day",
        element: <MyDayPage />,
        loader: fetchData,
      },
    ],
  },
];

export { routes };

