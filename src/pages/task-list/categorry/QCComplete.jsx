/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const QCComplete = ({ filteredAllQCTask, dataFromCenter }) => {
  const filteredQcComplete = filteredAllQCTask?.filter(
    (task) => task.status === "qc_complete"
  );
  const dataSet = {
    btnText: "QC Complete",
    bgColor: "bg-[#4B0082]",
    textColor: "text-[#4B0082]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredQcComplete?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card
                cardData={filteredQcComplete}
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

export default QCComplete;
