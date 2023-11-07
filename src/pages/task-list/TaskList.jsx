import Title from "../../utils/Title";
import InProgress from "./categorry/InProgress";
import Todo from "./categorry/Todo";
import Pause from "./categorry/Pause";
import CheckList from "./categorry/CheckList";
import QCProgress from "./categorry/QCProgress";
import AdminApproval from "./categorry/AdminApproval";
import Done from "./categorry/Done";
import Statistics from "../../components/statistics/Statistics";
import SearchField from "../../utils/SearchField";
import TaskFilterMenu from "../../components/task-filter/TaskFilterMenu";
import FilterButton from "../../utils/FilterButton";
import AddNewTaskBtn from "./categorry/AddNewTaskBtn";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import {
  useGetAllQCTaskListQuery,
  useGetAllTaskQuery,
} from "../../redux/features/task/taskApi";

const TaskList = () => {
  
  const redirect = "view-task";
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const { data: allUser } = useGetAllUserQuery();
  const { data: allQc } = useGetAllQCTaskListQuery();

  const userImages = allQc?.map((qc) => {
    const task = allTask?.find((task) => task.id === qc.task);
    const user = allUser?.find((userEntry) => userEntry.user.id === qc.user);
    if (task && user) {
      return { qcImg: user?.image, qcTask: qc?.task };
    }
    return null;
  });

  const dataFromCenter = {
    redirect: redirect,
    qcImg: userImages,
    allTask: allTask,
    isLoading: isLoading,
  };

  return (
    <div className="w-full font-Poppins pb-10">
      <Title>Task LIst</Title>

      {/* Search and Filter Btn */}
      <section className="flex items-center justify-between w-full">
        <SearchField />
        <AddNewTaskBtn />
        <div className="flex items-center gap-5">
          <TaskFilterMenu />
          <FilterButton />
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/*  <<========= Admin Task ========>>  */}
      <AdminApproval  dataFromCenter={dataFromCenter}/>

      {/*  <<=========== TODO ============>>  */}
      <Todo dataFromCenter={dataFromCenter} />

      {/*  <<======== IN PROGRESS ========>>  */}
      <InProgress dataFromCenter={dataFromCenter} />

      {/*  <<========== PAUSE ============>>  */}
      <Pause dataFromCenter={dataFromCenter}/>

      {/*  <<======== CHECKLIST ==========>>  */}
      <CheckList dataFromCenter={dataFromCenter} />

      {/*  <<======= QC PROGRESS =========>>  */}
      <QCProgress dataFromCenter={dataFromCenter} />

      {/*  <<=========== DONE ============>>  */}
      <Done dataFromCenter={dataFromCenter} />
    </div>
  );
};

export default TaskList;
