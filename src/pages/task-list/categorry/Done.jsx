/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Done = ({ dataFromCenter }) => {
  const doneTask = dataFromCenter?.allTask?.filter((task) => task.status === "done");

  const dataSet = {
    btnText: "Complete",
    bgColor: "bg-[#E74C3C]",
    textColor: "text-[#E74C3C]",
    redirect: dataFromCenter?.redirect,
  };
  
  return (
    <>
      {doneTask?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={doneTask} dataSet={dataSet} qcImages={dataFromCenter?.qcImg} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Done;
