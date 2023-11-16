import { PiFolderSimpleMinusBold } from "react-icons/pi";
import { FaBasketballBall } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";
import { useSelector } from "react-redux";

const TaskSummaryGraph = () => {
  const {userId} = useSelector(state => state.user)
  const { data: allUser } = useGetAllUserQuery();
  const { data: allTask } = useGetAllTaskQuery();

  const assignedTask = allUser?.map((user => user?.assigned_tasks_total));

  const assignedTaskDone = allTask?.filter(task =>  task?.assignee === userId && task.status === "done");
  console.log(assignedTaskDone)



  const [chartData] = useState({
    series: [
      {
        name: "Total Task",
        // data: [44, 55, 41, 67, 22, 43, 50],
        data: assignedTask,
      },
      {
        name: "Complete Task",
        data: [13, 23, 20, 8, 13, 27, 50],
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
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
          "01/07/2011 GMT",
        ],
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
