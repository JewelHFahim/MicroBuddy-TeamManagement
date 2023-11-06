/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QCProgress = ({ redirect, filteredAllQCTask, isLoading}) => {
  const { data: allTask } = useGetAllTaskQuery();
  const pathName = (window.location.pathname);
  const currentData = pathName === "/task-list" ? allTask : filteredAllQCTask;
  const filteredQCProgress = currentData?.filter((task) => task.status === "qc_progress");

  const dataSet = {
    btnText: "QC Progress",
    bgColor: "bg-[#E9967A]",
    textColor: "text-[#E9967A]",
    redirect: redirect,
  };

  return (
    <>
      {filteredQCProgress?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredQCProgress} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QCProgress;
