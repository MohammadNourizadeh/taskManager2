import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import ImportantTasksPage from "./pages/importantTasksPage/ImportantTasksPage";
import MyDayPage from "./pages/myDayPage/MyDayPage";
import CheckedTasksPage from "./pages/checkedTasksPage/CheckedTasksPage";

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
      {
        path: "/admin/checked",
        element: <CheckedTasksPage />,
      },
    ],
  },
];

export { routes };
