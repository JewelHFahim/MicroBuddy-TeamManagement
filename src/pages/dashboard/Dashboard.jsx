import { useSelector } from "react-redux";
// import DashboardCalendar from "../../components/dashboard-calender/DashboardCalendar";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import Title from "../../utils/Title";
import MyProductivity from "./MyProductivity";
import ProjectSummary from "./ProjectSummary";
import TaskSummeryGraph from "./TaskSummaryGraph";
import TotalSummaryDashboard from "./TotalSummaryDashboard";

const Dashboard = () => {
  const { type } = useSelector((state) => state.user);
  const { data: allTask } = useGetAllTaskQuery();
  const { data: allUser } = useGetAllUserQuery();

  return (
    <div className="pl-[33px] pr-[90px] pb-10 rounded-[21px]">
      <Title>My Dashboard</Title>

      {/* Admin View */}
      {type === "superadmin" && (
        <>
          <TaskSummeryGraph />
          <TotalSummaryDashboard allUser={allUser} allTask={allTask} />
        </>
      )}


      {/* User View */}
      {type !== "superadmin" && (
        <>
          <MyProductivity />
          <ProjectSummary />
        </>
      )}
    </div>
  );
};

export default Dashboard;
