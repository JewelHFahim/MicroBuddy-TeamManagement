/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  useGetAllQCTaskListQuery,
  useGetAllTaskQuery,
} from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QcTodo = ({ redirect }) => {
  const { userId } = useSelector((state) => state.user);

  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const { data: allQCTask } = useGetAllQCTaskListQuery();

  const tasksWithQcUser = allQCTask
    ?.filter((task) => task.user === userId)
    .map((task) => task.task);

  const onlyQCTask = allTask?.filter(
    (task) => tasksWithQcUser?.includes(task.id) && task.status === "checklist"
  );

  const dataSet = {
    btnText: "QC Todo",
    bgColor: "bg-[#D824C6]",
    textColor: "text-[#D824C6]",
    redirect: redirect,
  };

  return (
    <>
      {onlyQCTask?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={onlyQCTask} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QcTodo;
