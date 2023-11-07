import Title from "../../utils/Title";
import TaskFilterMenu from "../../components/task-filter/TaskFilterMenu";
import Statistics from "../../components/statistics/Statistics";
import SearchField from "../../utils/SearchField";
import FilterButton from "../../utils/FilterButton";
import QCTask from "./QCTask";
import MemberTask from "./MemberTask";
import { useState } from "react";
import { memberBtnStyle, qcButtonStyle } from "../../utils/Important";
import { useGetAllQCTaskListQuery, useGetAllTaskQuery } from "../../redux/features/task/taskApi";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";

const MyTask = () => {
  const redirect = "update-mytask";
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
      {toggleTask === "qc-task" ? (
        <QCTask dataFromCenter={dataFromCenter} />
      ) : (
        <MemberTask dataFromCenter={dataFromCenter} />
      )}
    </div>
  );
};

export default MyTask;
