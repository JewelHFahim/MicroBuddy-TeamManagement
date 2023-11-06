/* eslint-disable react/prop-types */
import {
  useGetAllTaskQuery,
} from "../../../redux/features/task/taskApi";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import Loading from "../../../utils/loading/Loading";
import Card from "./Card";

const Todo = ({ redirect, singleUserTask }) => {

  const pathName = (window.location.pathname);

  const { data: allTask, isLoading } = useGetAllTaskQuery();

  const currentData = pathName === "/task-list" ? allTask : singleUserTask;

  const filteredTodo = currentData?.filter((task) => task.status === "todo");

  const { data: allUser } = useGetAllUserQuery();


  // Pic
   function getUserImage(userId) {
    const user = allUser?.find((u) => u.user.id === userId);
    return user ? user.user.image : null;
  }
  
  // Usage in your component or as a prop to pass to another component
  // const assignerImage = getUserImage(task.assigner);
let abc = "";

  const dataSet = {
    btnText: "To Do",
    bgColor: "bg-[#FF8723]",
    textColor: "text-[#FF8723]",
    redirect: redirect,
    fn: getUserImage(abc)
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
