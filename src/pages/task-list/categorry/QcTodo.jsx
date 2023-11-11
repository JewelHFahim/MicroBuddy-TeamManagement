/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QcTodo = ({ dataFromCenter }) => {

  const onlyQCTask = dataFromCenter?.filteredAllQCTask?.filter((task) => task.status === "checklist");

  const dataSet = {
    btnText: "QC Todo",
    bgColor: "bg-[#D824C6]",
    textColor: "text-[#D824C6]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {onlyQCTask?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={onlyQCTask} dataSet={dataSet} qcImages={dataFromCenter?.qcImg}/>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QcTodo;
