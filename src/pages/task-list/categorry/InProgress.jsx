/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const InProgress = ({ redirect, singleUserTask }) => {

  const pathName = (window.location.pathname);

  const { data: allTask, isLoading } = useGetAllTaskQuery();

  const currentData = pathName === "/task-list" ? allTask : singleUserTask;

  const filteredInProgress = currentData?.filter(
    (task) => task.status === "inprogress"
  );

  const dataSet = {
    btnText: "In Progress",
    bgColor: "bg-[#CED200]",
    textColor: "text-[#CED200]",
    redirect: redirect,
  };

  return (
    <>
      {filteredInProgress?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredInProgress} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InProgress;
