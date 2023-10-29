/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const AdminApproval = ({ redirect }) => {
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const adminTask = allTask?.filter((task) => task.status === "qc_complete");

  const dataSet = {
    btnText: "Admin Approval",
    bgColor: "bg-[#0AECBF]",
    textColor: "text-[#0AECBF]",
    redirect: redirect,
  };

  return (
    <>
      {adminTask?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={adminTask} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdminApproval;
