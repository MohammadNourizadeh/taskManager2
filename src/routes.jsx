import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import CheckedTasksPage from "./pages/checkedTasksPage/CheckedTasksPage";
import ImportantTasksPage from "./pages/importantTasksPage/ImportantTasksPage";
import MyDayPage from "./pages/myDayPage/MyDayPage";
import NotesPage from "./pages/notesPage/NotesPage";

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
      {
        path: "/admin/notes",
        element: <NotesPage />,
      },
    ],
  },
];

export { routes };

