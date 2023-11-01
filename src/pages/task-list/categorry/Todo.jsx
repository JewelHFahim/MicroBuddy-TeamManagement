/* eslint-disable react/prop-types */
import {
  useGetAllTaskQuery,
} from "../../../redux/features/task/taskApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Todo = ({ redirect }) => {

  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const filteredTodo = allTask?.filter((task) => task.status === "todo");

  const dataSet = {
    btnText: "To Do",
    bgColor: "bg-[#FF8723]",
    textColor: "text-[#FF8723]",
    redirect: redirect,
  };

  return (
    <>
      {filteredTodo?.length > 0 && (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card cardData={filteredTodo} dataSet={dataSet} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Todo;
