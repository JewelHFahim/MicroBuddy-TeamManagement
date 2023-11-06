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

const TaskList = () => {
  const redirect = "view-task";
  


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
      <AdminApproval redirect={redirect} />

      {/*  <<=========== TODO ============>>  */}
      <Todo redirect={redirect} />

      {/*  <<======== IN PROGRESS ========>>  */}
      <InProgress redirect={redirect} />

      {/*  <<========== PAUSE ============>>  */}
      <Pause redirect={redirect} />

      {/*  <<======== CHECKLIST ==========>>  */}
      <CheckList redirect={redirect} />

      {/*  <<======= QC PROGRESS =========>>  */}
      <QCProgress redirect={redirect} />

      {/*  <<=========== DONE ============>>  */}
      <Done redirect={redirect} />

      
    </div>
  );
};

export default TaskList;
