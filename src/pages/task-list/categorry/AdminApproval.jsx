/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const AdminApproval = ({ dataFromCenter }) => {

  const adminTask = dataFromCenter?.allTask?.filter((task) => task.status === "qc_complete");

  const dataSet = {
    btnText: "Admin Approval",
    bgColor: "bg-[#0AECBF]",
    textColor: "text-[#0AECBF]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {adminTask?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={adminTask} dataSet={dataSet} qcImages={dataFromCenter?.qcImg} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdminApproval;
