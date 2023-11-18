import { PiFolderSimpleMinusBold } from "react-icons/pi";
import { FaBasketballBall } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const TaskSummaryGraph = () => {


  const { data: allUser } = useGetAllUserQuery();
  const { data: allTask } = useGetAllTaskQuery();

  const assignedTask = allUser?.filter((user) => user.type !== "superadmin")?.map((user) => user.assigned_tasks_total);
console.log(assignedTask)

// Filter out superadmin users
const regularUsers = allUser?.filter((user) => user.type !== "superadmin");

// Get unique user IDs for regular users
const userIds = regularUsers?.map((user) => user.user.id);
console.log(userIds);

// Function to get done tasks for a specific user
const getDoneTasksForUser = (userId) => {
  return allTask?.filter((task) => task.assignee === userId && task.status === "done" && task.assignee !== null);
};

// Get done tasks for all regular users
const allUsersDoneTasks = {};
userIds?.forEach((userId) => { 
  const doneTasks = getDoneTasksForUser(userId);
  allUsersDoneTasks[userId] = doneTasks;
});



// Get array lengths as an array
const arrayLengths = userIds?.map((userId) => allUsersDoneTasks[userId]?.length || 0);
console.log(arrayLengths);

  // Function to get the last 7 days including today
  // const getLast7Days = () => {
  //   const today = new Date();
  //   const last7Days = Array.from({ length: 7 }, (_, index) => {
  //     const day = new Date(today);
  //     day.setDate(today.getDate() - index);
  //     return day.toISOString().split('T')[0];
  //   });
  //   return last7Days.reverse();
  // };


  const [chartData] = useState({
    series: [
      {
        name: "Total Task",
        data: arrayLengths,
      },
      {
        name: "Complete Task",
        data: assignedTask,
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: false,
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { show: false },
          },
        },
      ],

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },

      colors: ["#0070E7", "#FEEEF4"],

      yaxis: {
        lines: {
          show: false,
        },
      },

      xaxis: {


        lines: {
          show: false,
        },

        // type: "datetime",
        // categories: getLast7Days(),


      },

      legend: {
        show: false,
      },

      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <div className="my-[25px] w-full h-[651px] bg-white p-[47px] rounded-[21px] shadow-lg ">
      <section className="w-full flex justify-between">
        <div className="flex items-center gap-[61px]">
          <div className=" flex items-center gap-[17px]">
            <PiFolderSimpleMinusBold className="text-[30px]" />
            <p className="text-[25px] font-Urbanist">Task</p>
          </div>

          <div className="w-[197px] h-[52px] rounded-[36px] bg-[#0E123E] flex justify-center items-center gap-[14px] text-white">
            <FaBasketballBall className="text-[29px]" />
            <p className="text-[25px] font-semibold font-Urbanist">Complete</p>
          </div>
        </div>

        <div className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex items-center justify-center gap-[20px] text-white">
          <BsFillCalendarFill className="text-[28px]" />
          <p className="text-[18px] font-Poppins font-semibold">Filter</p>
        </div>
      </section>

      <section className="mt-10">
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={400}
          />
        </div>

        <div className="flex justify-evenly items-center">
          {allUser
            ?.filter((user) => user.type !== "superadmin")
            ?.map((item, i) => (
              <div
                key={i}
                className={`w-[75px] h-[75px] bg-red-200 rounded-full ml-8`}
              >
                <img
                  src={item?.image}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default TaskSummaryGraph;
