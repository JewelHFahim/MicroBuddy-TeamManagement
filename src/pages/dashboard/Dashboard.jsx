import Title from "../../utils/Title";
import DaywiseTaskSummary from "./DaywiseTaskSummary";
import MyProductivity from "./MyProductivity";
import ProjectSummary from "./ProjectSummary";
import TaskSummeryGraph from "./TaskSummaryGraph";
import TotalSummaryDashboard from "./TotalSummaryDashboard";

const Dashboard = () => {
  return (
    <div className="pl-[33px] pr-[90px] pb-10 rounded-[21px]">
      <Title>My Dashboard</Title>
      <DaywiseTaskSummary />
      <TaskSummeryGraph />
      <TotalSummaryDashboard/>
      <MyProductivity/>
      <ProjectSummary/>
    </div>
  );
};

export default Dashboard;
