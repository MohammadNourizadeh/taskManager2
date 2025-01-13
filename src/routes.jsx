import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import MyDayPage from "./pages/myDayPage/MyDayPage";
import ImportantTasksPage from "./pages/importantPage/ImportantTasksPage";

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
      },
      {
        path: "/admin/important",
        element: <ImportantTasksPage />,
      },
    ],
  },
];

export { routes };
