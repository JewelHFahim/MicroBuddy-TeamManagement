/* eslint-disable react/prop-types */
import { FaUserCheck } from "react-icons/fa";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMoreTime } from "react-icons/md";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const Statistics = () => {
  // const currentDate = new Date();


const {data: allTask } = useGetAllTaskQuery();
const memberProgress = allTask?.filter(task => task.status === "inprogress");
const qcProgress = allTask?.filter(task => task.status === "qc_progress");
const completeTask = allTask?.filter(task => task.status === "done");



// Function to count overdue tasks
// function countOverdueTasks(tasks) {

//   let overdueCount = 0;

//   for (const task of tasks) {
//     const dueDate = new Date(task?.due_date);

//     if (currentDate > dueDate) {
//       overdueCount++;
//     }
//   }

//   return overdueCount;
// }

// // Call the function to count overdue tasks
// const totalOverdueTasks = countOverdueTasks(allTask);

// console.log('Total overdue tasks:', totalOverdueTasks);


const datas = [
  {
    total: allTask?.length,
    title: "Total Assign",
    icon: <FaUserCheck />,
    bg: "bg-[#216FED]",
  },
  {
    total: memberProgress?.length + qcProgress?.length,
    title: "In Progress",
    icon: <BiSolidPieChartAlt />,
    bg: "bg-[#CED200]",
  },
  {
    total: completeTask?.length ,
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
