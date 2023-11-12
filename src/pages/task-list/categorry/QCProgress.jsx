/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QCProgress = ({ dataFromCenter}) => {

  const pathName = (window.location.pathname);
  const currentData = pathName === "/task-list" ? dataFromCenter?.allTask : dataFromCenter?.filteredAllQCTask;
  const filteredQCProgress = currentData?.filter((task) => task.status === "qc_progress");

  const dataSet = {
    btnText: "QC Progress",
    bgColor: "bg-[#E9967A]",
    textColor: "text-[#E9967A]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredQCProgress?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredQCProgress} dataSet={dataSet} qcImages={dataFromCenter?.qcImg} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QCProgress;
