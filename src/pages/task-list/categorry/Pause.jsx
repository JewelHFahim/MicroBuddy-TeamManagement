/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Pause = ({ dataFromCenter, singleUserTask}) => {
  const pathName = (window.location.pathname);
  const currentData = pathName === "/task-list" ? dataFromCenter?.allTask  : singleUserTask;
  const filteredPause = currentData?.filter((task) => task.status === "pause");

  const dataSet = {
    btnText: "Pause",
    bgColor: "bg-[#D86F24]",
    textColor: "text-[#D86F24]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredPause?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredPause} dataSet={dataSet}  qcImages={dataFromCenter?.qcImg} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Pause;
