import Title from "../../utils/Title";
import TaskFilterMenu from "../../components/task-filter/TaskFilterMenu";
import Statistics from "../../components/statistics/Statistics";
import SearchField from "../../utils/SearchField";
import FilterButton from "../../utils/FilterButton";
import QCTask from "./QCTask";
import MemberTask from "./MemberTask";
import { useState } from "react";
import { memberBtnStyle, qcButtonStyle } from "../../utils/Important";

const MyTask = () => {
  const [toggleTask, setToggoleTasl] = useState("member-task");

  const handleToggle = (toggle) => {
    setToggoleTasl(toggle);
  };

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px] pb-10">
      <Title>My Task </Title>

      {/*  <<=== Search & Filter ====>>  */}
      <section className="flex items-center justify-between gap-4 w-full">
        <SearchField />

        <div className="flex items-center gap-5">
          <TaskFilterMenu />

          <FilterButton />

          {/* Toggle Task */}
          <div>
            {toggleTask === "qc-task" ? (
              <button
                onClick={() => handleToggle("member-task")}
                className={memberBtnStyle}
              >
                Member Task
              </button>
            ) : (
              <button
                onClick={() => handleToggle("qc-task")}
                className={qcButtonStyle}
              >
                QC Task
              </button>
            )}
          </div>
        </div>
      </section>

      {/*  <<====== Statistics ======>>  */}
      <Statistics />

      {/*  <<======= TASK ========>>  */}
      {toggleTask === "qc-task" ? <QCTask /> : <MemberTask />}
      
    </div>
  );
};

export default MyTask;
