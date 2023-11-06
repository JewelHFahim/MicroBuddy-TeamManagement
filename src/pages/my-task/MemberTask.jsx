/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CheckList from "../task-list/categorry/CheckList";
import InProgress from "../task-list/categorry/InProgress";
import Pause from "../task-list/categorry/Pause";
import Todo from "../task-list/categorry/Todo";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const MemberTask = () => {
  const redirect = "update-mytask";
  const { type, userId } = useSelector((state) => state.user);
  const { data: allTask } = useGetAllTaskQuery();
  const singleUserTask = allTask?.filter(
    (task) => task.assignee === parseInt(userId)
  );

  return (
    <>
      {/* ####### NOT FOR SUPERADMIN/ADMIN ######## */}
      {(type !== "superadmin" || type !== "admin") && (
        <>
          {/*  <<=========== TODO ============>>  */}
          <Todo redirect={redirect} singleUserTask={singleUserTask} />

          {/*  <<======== IN PROGRESS ========>>  */}
          <InProgress redirect={redirect} singleUserTask={singleUserTask} />

          {/*  <<=========== PAUSE ===========>>  */}
          <Pause redirect={redirect} singleUserTask={singleUserTask} />

          {/*  <<===== FOR QC CHECKLIST ======>>  */}
          <CheckList redirect={redirect} singleUserTask={singleUserTask} />
        </>
      )}
    </>
  );
};

export default MemberTask;
