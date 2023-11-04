import Title from "../../utils/Title";
import { useSelector } from "react-redux";
import Todo from "../task-list/categorry/Todo";
import InProgress from "../task-list/categorry/InProgress";
import Pause from "../task-list/categorry/Pause";
import CheckList from "../task-list/categorry/CheckList";
import TaskFilterMenu from "../../components/task-filter/TaskFilterMenu";
import Statistics from "../../components/statistics/Statistics";
import SearchField from "../../utils/SearchField";
import FilterButton from "../../utils/FilterButton";
import QcTodo from "../task-list/categorry/QcTodo";
import QCProgress from "../task-list/categorry/QCProgress";
import QCComplete from "../task-list/categorry/QCComplete";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const MyTask = () => {

  const redirect = "update-mytask";
  const { type, userId } = useSelector((state) => state.user);
  const {data: allTask} = useGetAllTaskQuery();
const singleUserTask = allTask?.filter(task => task.assignee === parseInt(userId));


  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px] pb-10">
      <Title>My Task </Title>

      {/*  <<=== Search & Filter ====>>  */}
      <section className="flex items-center justify-between w-full">
        <SearchField />
        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          <TaskFilterMenu />
          <FilterButton />
        </div>
      </section>

      {/*  <<====== Statistics ======>>  */}
      <Statistics />

      {/*  <<======= QC Todo ========>>  */}
      <QcTodo redirect={redirect}/>

      {/*  <<==== QC In PROGRESS =====>> */}
      <QCProgress redirect={redirect} />

      {/*  <<===== QC COMPLETE =======>>  */}
      <QCComplete redirect={redirect}/>

      {/* ####### NOT FOR SUPERADMIN/ADMIN ######## */}
      <>
        {(type !== "superadmin" || type !== "admin") && (
          <>
            {/*  <<=========== TODO ============>>  */}
            <Todo redirect={redirect} singleUserTask={singleUserTask}/>

            {/*  <<======== IN PROGRESS ========>>  */}
            <InProgress redirect={redirect} singleUserTask={singleUserTask}/>

            {/*  <<=========== PAUSE ===========>>  */}
            <Pause redirect={redirect} singleUserTask={singleUserTask}/>

            {/*  <<===== FOR QC CHECKLIST ======>>  */}
            <CheckList redirect={redirect} singleUserTask={singleUserTask}/>
          </>
        )}
      </>
    </div>
  );
};

export default MyTask;
