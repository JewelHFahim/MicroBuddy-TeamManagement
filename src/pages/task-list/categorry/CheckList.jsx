/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const CheckList = ({ redirect }) => {
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const filteredCheckList = allTask?.filter(
    (task) => task.status === "checklist"
  );

  const dataSet = {
    btnText: "CheckList",
    bgColor: "bg-[#D824C6]",
    textColor: "text-[#D824C6]",
    redirect: redirect,
  };

  return (
    <>
      {filteredCheckList?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredCheckList} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CheckList;
