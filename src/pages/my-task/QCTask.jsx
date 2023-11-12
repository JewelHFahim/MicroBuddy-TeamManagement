/* eslint-disable react/prop-types */
import QCComplete from "../task-list/categorry/QCComplete";
import QCProgress from "../task-list/categorry/QCProgress";
import QcTodo from "../task-list/categorry/QcTodo";

const QCTask = ({ dataFromCenter }) => {
  return (
    <div>
      
      {/*  <<======= QC Todo ========>>  */}
      <QcTodo dataFromCenter={dataFromCenter} />

      {/*  <<==== QC In PROGRESS =====>> */}
      <QCProgress dataFromCenter={dataFromCenter} />

      {/*  <<===== QC COMPLETE =======>>  */}
      <QCComplete dataFromCenter={dataFromCenter} />


    </div>
  );
};

export default QCTask;
