/* eslint-disable react/prop-types */
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Todo = ({ dataFromCenter, singleUserTask }) => {
  const pathName = window.location.pathname;
  const currentData =
    pathName === "/task-list" ? dataFromCenter?.allTask : singleUserTask;
  const filteredTodo = currentData?.filter((task) => task.status === "todo");

  const dataSet = {
    btnText: "To Do",
    bgColor: "bg-[#FF8723]",
    textColor: "text-[#FF8723]",
    redirect: dataFromCenter?.redirect,
  };

  return (
    <>
      {filteredTodo?.length > 0 && (
        <div>
          {dataFromCenter?.isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[30px] flex flex-col gap-[20px]">
              <Card
                cardData={filteredTodo}
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

export default Todo;
