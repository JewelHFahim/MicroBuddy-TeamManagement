import { FiSearch } from "react-icons/fi";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { BsCalendarFill, BsEye, BsTrashFill } from "react-icons/bs";
import { MdMoreTime } from "react-icons/md";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import DateFormat from "../../utils/DateFormat";
import { useDeleteTaskMutation } from "../../redux/features/task/taskApi";
import toast from "react-hot-toast";

const TaskList = () => {
  const { token } = useSelector((state) => state.user);
  const [deleteTask] = useDeleteTaskMutation();
  const [allTask, setAllTask] = useState([]);

  const datas = [
    {
      total: 245,
      title: "Total Assign",
      icon: <FaUserCheck />,
      bg: "bg-[#216FED]",
    },
    {
      total: 5623,
      title: "Completed",
      icon: <BiSolidPieChartAlt />,
      bg: "bg-[#CED200]",
    },
    {
      total: 312,
      title: "Total Assign",
      icon: <IoCheckmarkDoneCircle />,
      bg: "bg-[#216FED]",
    },
    {
      total: 415,
      title: "Over Date",
      icon: <MdMoreTime />,
      bg: "bg-[#ED9B21]",
    },
  ];

  useEffect(() => {
    fetch("http://192.168.3.36:8000/task-list/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        setAllTask(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  const filteredTodo = allTask?.filter((task) => task.status === "todo");

  // const filteredInProgress = allTask?.filter(
  //   (task) => task.status === "inprogress"
  // );
  // const filteredComplete = allTask?.filter((task) => task.status === "done");
  // const filteredPause = allTask?.filter((task) => task.status === "pause");
  // const filteredCheckList = allTask?.filter(
  //   (task) => task.status === "checklist"
  // );
  // const filteredQCProgress = allTask?.filter(
  //   (task) => task.status === "qc_progress"
  // );
  // const filteredQCCompleted = allTask?.filter(
  //   (task) => task.status === "qc_complete"
  // );

  const handleDeleteTask = (id) => {
  deleteTask(id)
    toast.error("Deleted Task")
  }

  return (
    <div className="w-full font-Poppins pb-10">
      <Title>Task LIst</Title>

      {/* Search and Filter Btn */}
      <section className="flex items-center justify-between w-full">
        {/* Search Filed */}
        <div className="w-[827px] h-[60px] rounded-[20px] flex justify-between items-center px-[29px] bg-white shadow-md">
          <input
            type="text"
            placeholder="Search Task Here"
            className="w-[780px] h-[58px] rounded-[20px] focus:outline-none text-[#96A0AF] font-semibold"
          />
          <FiSearch className="text-[24px] text-[#216FED]" />
        </div>

        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          <Link to="/create-task">
            <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
              <p className="text-[18px] font-semibold">+ New Task</p>
            </button>
          </Link>

          <button className="w-[166px] h-[60px] rounded-[20px] bg-white flex justify-center items-center gap-[36px] shadow-lg">
            <p className="text-[18px] font-semibold text-[#273240]">All</p>
            <IoIosArrowDown className="text-[24px] text-[#216FED]" />
          </button>

          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <BsCalendarFill className="text-[24px] " />
            <p className="text-[18px] font-semibold">Filter</p>
          </button>
        </div>
      </section>

      <section className="mt-[38px] grid grid-cols-4 gap-[45px]">
        {datas.map((item, i) => (
          <div
            key={i}
            className=" w-[331px] h-[126px] rounded-[14px] bg-white shadow-lg flex justify-start items-center px-[30px] py-[24px] gap-[30px]"
          >
            <div
              className={`w-[78px] h-[78px] rounded-[20px] ${item.bg} text-[46px] text-white flex justify-center items-center`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-[36px] font-semibold text-[#273240]">
                {item.total}
              </h3>
              <p className="font-medium text-[#737B8B]">{item.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TO DO */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#FF8723] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white">TO DO</p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {filteredTodo?.map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">QC Check</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600">
                    <tr>
                      <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                        <img
                          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          className="w-[90px] h-[90px]  rounded-[31px]"
                        />
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
                            <div key={i} 
                            className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300 flex justify-center items-center"
                            >{item}</div>
                          ))}
                        </div>
                      </td>

                      <td className="text-right px-2 whitespace-nowrap">
                        <div className="flex justify-between items-center px-5 w-full">
                          <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                            <p className="text-[#FF8723] font-semibold">
                              TO DO
                            </p>
                          </button>
                          <Link to={`/view-task/${item?.id}`}>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </Link>

                          <button onClick={()=>handleDeleteTask(item?.id)} className="text-[25px] text-red-700 flex justify-center items-center"><BsTrashFill/></button>
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

    </div>
  );
};

export default TaskList;
