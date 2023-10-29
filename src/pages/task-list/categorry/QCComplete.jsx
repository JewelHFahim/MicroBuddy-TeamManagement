/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QCComplete = ({ redirect }) => {
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const filteredQcComplete = allTask?.filter(
    (task) => task.status === "qc_complete"
  );

  const dataSet = {
    btnText: "QC Complete",
    bgColor: "bg-[#4B0082]",
    textColor: "text-[#4B0082]",
    redirect: redirect,
  };

  return (
    <>
      {filteredQcComplete?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredQcComplete} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QCComplete;
