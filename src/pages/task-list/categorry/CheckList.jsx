/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const CheckList = ({ singleUserTask, dataFromCenter }) => {

  const pathName = (window.location.pathname);
  const currentData = pathName === "/task-list" ? dataFromCenter?.allTask : singleUserTask;
  const filteredCheckList = currentData?.filter((task) => task.status === "checklist");

  const dataSet = {
    btnText: "CheckList",
    bgColor: "bg-[#D824C6]",
    textColor: "text-[#D824C6]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredCheckList?.length > 0 && (
        <div>
          { dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredCheckList} dataSet={dataSet} qcImages={dataFromCenter?.qcImg} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CheckList;
