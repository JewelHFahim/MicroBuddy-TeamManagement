/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  useGetAllTaskQuery,
  useGetQCTaskListByQcIdQuery,
} from "../../redux/features/task/taskApi";
import QCComplete from "../task-list/categorry/QCComplete";
import QCProgress from "../task-list/categorry/QCProgress";
import QcTodo from "../task-list/categorry/QcTodo";

const QCTask = () => {
    
  const redirect = "update-mytask";
  const { userId } = useSelector((state) => state.user);
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  
  const { data: qcTaskList } = useGetQCTaskListByQcIdQuery(userId);
  const qcTaskIds = qcTaskList?.map((qcTask) => qcTask.task);
  const filteredAllQCTask = allTask?.filter((task) => qcTaskIds?.includes(task.id));

  return (
    <div>
      {/*  <<======= QC Todo ========>>  */}
      <QcTodo
        redirect={redirect}
        filteredAllQCTask={filteredAllQCTask}
        isLoading={isLoading}
      />

      {/*  <<==== QC In PROGRESS =====>> */}
      <QCProgress
        redirect={redirect}
        filteredAllQCTask={filteredAllQCTask}
        isLoading={isLoading}
      />

      {/*  <<===== QC COMPLETE =======>>  */}
      <QCComplete
        redirect={redirect}
        filteredAllQCTask={filteredAllQCTask}
        isLoading={isLoading}
      />
    </div>
  );
};

export default QCTask;
