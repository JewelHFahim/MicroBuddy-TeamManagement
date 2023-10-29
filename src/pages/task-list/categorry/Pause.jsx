/* eslint-disable react/prop-types */
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Pause = ({ redirect }) => {
  
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const filteredPause = allTask?.filter((task) => task.status === "pause");

  const dataSet = {
    btnText: "Pause",
    bgColor: "bg-[#D86F24]",
    textColor: "text-[#D86F24]",
    redirect: redirect,
  };

  return (
    <>
      {filteredPause?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredPause} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Pause;
