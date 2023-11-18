import { useHistoryListQuery } from "../../redux/features/history/historyApi";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import DateFormat from "../../utils/DateFormat";
import Title from "../../utils/Title";

const History = () => {
  const { data: historyList } = useHistoryListQuery();
  const { data: allTask } = useGetAllTaskQuery();
  const { data: allUser } = useGetAllUserQuery();

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px]">

      <Title>History</Title>

      <section className="mt-16 flex flex-col gap-6">
        {historyList?.map((item, i) => {

          const task = allTask?.find((task) => task.id === item.task);
          const userName = allUser?.find((user) => user.user.id === item.user);

          return (
            <div
              key={i}
              className="w-full h-[80px] rounded-[20px] bg-white flex justify-between items-center px-10"
            >
              <div className="flex gap-4">
                <div className="w-[55px] h-[55px] rounded-full bg-red-200">
                  <img src={userName?.image} alt="" className="w-full h-full object-cover rounded-full"/>
                </div>
                <p className="text-black">
                  Created Task “
                  <span className="text-blue-600">
                    {task?.task_name || "Unknown Task"}
                  </span>
                  ” and assign “
                  <span className="text-blue-600">
                    {userName?.user?.username || "Unknown"}
                  </span>
                  “
                </p>
              </div>

              <div>
                <p className="text-blue-600 text-center text-[18px]">
                  {DateFormat(task?.start_date)}
                </p>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};

export default History;
