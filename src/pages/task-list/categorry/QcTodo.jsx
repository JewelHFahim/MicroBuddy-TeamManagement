/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QcTodo = ({ redirect, filteredAllQCTask, isLoading }) => {
  const onlyQCTask = filteredAllQCTask?.filter((task) => task.status === "checklist");

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
