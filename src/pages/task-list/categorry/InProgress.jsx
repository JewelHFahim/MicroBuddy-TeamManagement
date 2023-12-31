/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const InProgress = ({ dataFromCenter, singleUserTask }) => {
  const pathName = window.location.pathname;
  const currentData =
    pathName === "/task-list" ? dataFromCenter?.allTask : singleUserTask;
  const filteredInProgress = currentData?.filter(
    (task) => task.status === "inprogress"
  );

  const dataSet = {
    btnText: "In Progress",
    bgColor: "bg-[#CED200]",
    textColor: "text-[#CED200]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredInProgress?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card
                cardData={filteredInProgress}
                dataSet={dataSet}
                qcImages={dataFromCenter?.qcImg}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InProgress;
