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
import Register from "../pages/login/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import UpdateNotice from "../pages/notice/notice-update/UpdateNotice";
import CheckListCreat from "../pages/task-list/create-task/CheckListCreat";
import ABC from "../pages/task-list/create-task/abc";
import UpdateMyTask from "../pages/my-task/update/UpdateMyTask";
import QCTask from "../pages/my-task/QCTask";
import MemberTask from "../pages/my-task/MemberTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Main />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // **********My Task Related************//
      {
        path: "/my-task",
        element: <MyTask />,
      },
      
      {
        path: "/update-mytask/:id",
        element: <UpdateMyTask />,
      },

      {
        path: "/qc-task",
        element: <QCTask />,
      },
      {
        path: "/my-task",
        element: <MemberTask />,
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
      {
        path: "/create-checklist",
        element: <CheckListCreat />,
      },
      {
        path: "/abc",
        element: <ABC />,
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

      // **********Notices************//
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
        path: "/notice-update/:id",
        element: <UpdateNotice />,
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

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <PrivateRouter><Register /></PrivateRouter>,
  },
]);

export default router;
