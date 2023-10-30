/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Done = ({ redirect }) => {
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const doneTask = allTask?.filter((task) => task.status === "done");

  const dataSet = {
    btnText: "Complete",
    bgColor: "bg-[#E74C3C]",
    textColor: "text-[#E74C3C]",
    redirect: redirect,
  };
  return (
    <>
      {doneTask?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={doneTask} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Done;
