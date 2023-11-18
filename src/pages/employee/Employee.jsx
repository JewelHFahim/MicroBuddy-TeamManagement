import { FiEye } from "react-icons/fi";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../redux/features/user/userApi";
import Loading from "../../utils/loading/Loading";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const Employee = () => {
  const { data: allUser, isLoading } = useGetAllUserQuery();
  const { data: allTask } = useGetAllTaskQuery();
  const [deleteUser] = useDeleteUserMutation();
  const { type } = useSelector((state) => state.user);

  const tableHeadData = [
    { title: "ID" },
    { title: "Name" },
    { title: "Designation" },
    { title: "Email" },
    { title: "Task Point" },
    { title: "Task Assign" },
    { title: "Over Date" },
    { title: "Role" },
    { title: "" },
  ];

  const handleDelete = (id) => {
    deleteUser(id);
    console.log(id);
    toast.success("Deleted user");
  };

  // for due date start

  // Filter out superadmin users
  const regularUsers = allUser?.filter((user) => user.type !== "superadmin");

  // Get unique user IDs for regular users
  const userIds = regularUsers?.map((user) => user.user.id);

  // Function to get done tasks for a specific user
  const getOverdueTasksForUser = (userId) => {
    return allTask?.filter(
      (task) =>
        task.assignee === userId &&
        task.status === "done" &&
        task.assignee !== null &&
        task.on_time_completion === false
    );
  };

// Get overdue tasks for all regular users
const allUsersOverdueTasks = {};
userIds?.forEach((userId) => {
  const overdueTasks = getOverdueTasksForUser(userId);
  allUsersOverdueTasks[userId] = overdueTasks;
});

 // Render the "Over Date" column
 const renderOverdueColumn = (userId) => {
  const overdueTasks = allUsersOverdueTasks[userId];
  const overdueTasksCount = overdueTasks ? overdueTasks.length : 0;

  return (
    <span className="text-red-500 font-medium">
      {overdueTasksCount} 
      {/* {overdueTasksCount !== 1 ? '' : ''} */}
    </span>
  );
};

  // end

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px]">
      <Title>Employee</Title>

      <section>
        {type === "superadmin" && (
          <Link to="/register" className="w-full flex justify-end">
            <button className="font-semibold text-blue-600 text-[18px]">
              + Add Member
            </button>
          </Link>
        )}

        <table className="w-full table-auto text-sm text-left bg-gray-50">
          <thead className=" text-gray-600 font-medium border-b uppercase">
            <tr>
              {tableHeadData?.map((item, i) => (
                <th key={i} className="py-3 px-6">
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>

          {isLoading ? (
            <div className="flex justify-center items-center  h-[30vh]">
              <Loading />
            </div>
          ) : (
            <tbody className="text-[#273240] divide-y">
              {allUser?.map((user, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <p className="block text-[16px] font-medium">
                      {user.user.id}.
                    </p>
                    <img
                      src={user.image}
                      className="w-[55px] h-[55px] rounded-full"
                    />
                  </td>

                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    {user.user.username}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    {user?.category}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    {user.user.email}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">{user?.score}</td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    {user?.assigned_tasks_count}
                  </td>

                  <td className="px-6 py-8 whitespace-nowrap">
                  {renderOverdueColumn(user.user.id)}
                  </td>

                  <td
                    className={`px-6 py-8 whitespace-nowrap uppercase ${
                      user.type === "superadmin"
                        ? "text-[#216FED]"
                        : user.type === "admin"
                        ? "text-[#ED9B21]"
                        : "text-[#32D16D]"
                    }`}
                  >
                    {user.type}
                  </td>

                  <td className="text-[20px] flex items-center gap-4">
                    <Link to={`/employee-detail-view/${user.user.id}`}>
                      <button>
                        <FiEye />
                      </button>
                    </Link>

                    {type === "superadmin" && (
                      <button
                        onClick={() => handleDelete(user.user.id)}
                        className="text-red-300 mr-2 hover:text-red-600"
                      >
                        <BsFillTrashFill />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>
    </div>
  );
};

export default Employee;
