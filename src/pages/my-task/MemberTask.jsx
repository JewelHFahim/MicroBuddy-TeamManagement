/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CheckList from "../task-list/categorry/CheckList";
import InProgress from "../task-list/categorry/InProgress";
import Pause from "../task-list/categorry/Pause";
import Todo from "../task-list/categorry/Todo";

const MemberTask = ({dataFromCenter}) => {
  const { type, userId } = useSelector((state) => state.user);
  const singleUserTask = dataFromCenter?.allTask?.filter((task) => task.assignee === parseInt(userId));

  return (
    <>
      {/* ####### NOT FOR SUPERADMIN/ADMIN ######## */}
      {(type !== "superadmin" || type !== "admin") && (
        <>
          {/*  <<=========== TODO ============>>  */}
          <Todo  singleUserTask={singleUserTask} dataFromCenter={dataFromCenter} />

          {/*  <<======== IN PROGRESS ========>>  */}
          <InProgress singleUserTask={singleUserTask} dataFromCenter={dataFromCenter}  />

          {/*  <<=========== PAUSE ===========>>  */}
          <Pause singleUserTask={singleUserTask} dataFromCenter={dataFromCenter}  />

          {/*  <<===== FOR QC CHECKLIST ======>>  */}
          <CheckList singleUserTask={singleUserTask} dataFromCenter={dataFromCenter}  />
        </>
      )}
    </>
  );
};

export default MemberTask;
