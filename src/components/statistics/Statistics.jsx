/* eslint-disable react/prop-types */
import { FaUserCheck } from "react-icons/fa";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMoreTime } from "react-icons/md";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const Statistics = ({ dataFromCenter }) => {
  // const currentDate = new Date();
  const pathName = window.location.pathname;
  const { data: allTask } = useGetAllTaskQuery();

  const memberProgress = allTask?.filter(
    (task) => task.status === "inprogress"
  );

  const allQcProgress = allTask?.filter(
    (task) => task.status === "qc_progress"
  );
  const singleQcProgress = dataFromCenter?.filteredAllQCTask?.filter(
    (task) => task.status === "qc_progress"
  );

  const completeTask = allTask?.filter((task) => task.status === "done");
  const singleQcDone = dataFromCenter?.filteredAllQCTask?.filter((task) => task.status === "done");

  const datas = [
    {
      total:
        pathName === "/task-list"
          ? allTask?.length
          : dataFromCenter?.userDetail?.assigned_tasks_total,
      title: "Total Assign",
      icon: <FaUserCheck />,
      bg: "bg-[#216FED]",
    },

    {
      total:
        pathName === "/task-list"
          ? allQcProgress?.length + memberProgress?.length
          : singleQcProgress?.length + memberProgress?.length,
      title: "In Progress",
      icon: <BiSolidPieChartAlt />,
      bg: "bg-[#CED200]",
    },

    {
      total:
        pathName === "/task-list" ? completeTask?.length : completeTask?.length + singleQcDone?.length,
      title: "Complete",
      icon: <IoCheckmarkDoneCircle />,
      bg: "bg-[#216FED]",
    },

    {
      total: 0,
      title: "Over Date",
      icon: <MdMoreTime />,
      bg: "bg-[#ED9B21]",
    },
  ];

  return (
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
  );
};

export default Statistics;
