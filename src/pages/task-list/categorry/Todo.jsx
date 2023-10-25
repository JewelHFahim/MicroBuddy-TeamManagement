/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DateFormat from "../../../utils/DateFormat";
import { BsEye } from "react-icons/bs";
import { useGetAllTaskQuery } from "../../../redux/features/task/taskApi";
import StatusTitle from "../../../utils/StatusTitle";
import TableHead from "../../../utils/TableHead";
import { userProPic } from "../../../utils/Important";
import StatusBtnOutLine from "../../../utils/StatusBtnOutLine";
import Loading from "../../../utils/loading/Loading";

const Todo = ({redirect}) => {
  const { data: allTask, isLoading } = useGetAllTaskQuery();

  const filteredTodo = allTask?.filter((task) => task.status === "todo");


  return (
    <>
    {
      isLoading ? <Loading/> :

      <section className="mt-[32px]">
      
      <StatusTitle className="bg-[#FF8723]">Todo</StatusTitle>

      <div className="mt-[18px] flex flex-col gap-[20px]">
        {filteredTodo?.map((item, i) => (
          <div key={i}>
            <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
              <table className="w-full table-auto text-center">
                <TableHead />

                <tbody className="text-gray-600">
                  <tr>
                    <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                      <img src={userProPic} className="w-[90px] h-[90px]  rounded-[31px]"/>

                      <div className="text-left">
                        <span className="block text-[#216FED] font-[300]">
                          C012345-{item?.id}
                        </span>
                        <span className="block text-[#273240] text-[20px] font-semibold">
                          {item?.task_name}
                        </span>
                        <span className="block text-[#216FED] font-[300]">
                          {DateFormat(item?.start_date)}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                      {DateFormat(item?.start_date)}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center">
                        <div className="w-[35px] h-[35px] rounded-full border-2 shrink-0 bg-red-300 flex justify-center items-center font-semibold">
                          {item?.assignee}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center">
                        {item?.qc_check?.map((item, i) => (
                          <div
                            key={i}
                            className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300 flex justify-center items-center"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </td>

                    <td className="text-right px-2 whitespace-nowrap">
                      <div className="flex justify-between items-center px-5 w-full">                      
                        <StatusBtnOutLine className="text-[#FF8723]">To Do </StatusBtnOutLine>
                        <Link to={`/${redirect}/${item?.id}`}>
                          <button className="text-[32px] text-black flex justify-center items-center">
                            <BsEye />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  }
  </>
  );
};

export default Todo;
