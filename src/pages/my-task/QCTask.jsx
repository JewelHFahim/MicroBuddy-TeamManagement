/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useGetQCTaskListByQcIdQuery } from "../../redux/features/task/taskApi";
import QCComplete from "../task-list/categorry/QCComplete";
import QCProgress from "../task-list/categorry/QCProgress";
import QcTodo from "../task-list/categorry/QcTodo";

const QCTask = ({dataFromCenter}) => {
  const { userId } = useSelector((state) => state.user);
  const { data: qcTaskList } = useGetQCTaskListByQcIdQuery(userId);
  const qcTaskIds = qcTaskList?.map((qcTask) => qcTask.task);
  const filteredAllQCTask = dataFromCenter?.allTask?.filter((task) => qcTaskIds?.includes(task.id));

  return (
    <div>
      {/*  <<======= QC Todo ========>>  */}
      <QcTodo
        filteredAllQCTask={filteredAllQCTask}
        dataFromCenter={dataFromCenter}
      />

      {/*  <<==== QC In PROGRESS =====>> */}
      <QCProgress
        filteredAllQCTask={filteredAllQCTask}
        dataFromCenter={dataFromCenter}
      />

      {/*  <<===== QC COMPLETE =======>>  */}
      <QCComplete
        filteredAllQCTask={filteredAllQCTask}
        dataFromCenter={dataFromCenter}
      />
    </div>
  );
};

export default QCTask;
