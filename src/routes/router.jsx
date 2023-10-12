import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import MyTask from "../pages/my-task/MyTask";
import Calender from "../pages/calender/Calender";
import TaskList from "../pages/task-list/TaskList";
import Employee from "../pages/employee/Employee";
import History from "../pages/history/History";
import Setting from "../pages/setting/Setting";
import Notices from "../pages/notice/Notices";
import CreateTask from "../pages/task-list/create-task/CreateTask";
import ViewTask from "../pages/task-list/view-task/ViewTask";
import EditTask from "../pages/task-list/edit-task/EditTask";
import EmployeeDetailsView from "../pages/employee/employee-detaislview/EmployeeDetailsView";
import ViewNotice from "../pages/notice/view-notice/ViewNotice";
import CreateNotice from "../pages/notice/create-notice/CreateNotice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-task",
        element: <MyTask />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },

      // **********Task Related************//
      {
        path: "/task-list",
        element: <TaskList />,
      },
      {
        path: "/create-task",
        element: <CreateTask />,
      },
      {
        path: "/view-task/:id",
        element: <ViewTask />,
      },
      {
        path: "/edit-task/:id",
        element: <EditTask />,
      },

      // **********Emplyee************//
      {
        path: "/employee",
        element: <Employee />,
      },

      {
        path: "/employee-detail-view/:id",
        element: <EmployeeDetailsView />,
      },


      // **********Emplyee************//

      {
        path: "/notices",
        element: <Notices />,
      },
      {
        path: "/view-notice/:id",
        element: <ViewNotice />,
      },
      {
        path: "/create-notice/",
        element: <CreateNotice />,
      },



      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
