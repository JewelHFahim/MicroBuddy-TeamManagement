/* eslint-disable react/prop-types */
import { BiMessageRoundedDots } from "react-icons/bi";
import { ImLink } from "react-icons/im";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const TotalSummaryDashboard = ({ allUser, allTask }) => {

  const employees = allUser?.filter((user) => user.type !== "superadmin");
  const completedTask = allTask?.filter((task) => task.status === "done");
  const visibleUser = allUser?.slice(0, 5);
  const overDate = allTask?.filter(task => task.status === "done" && task.on_time_completion === false);



  const datas = [
    {
      title: "Total Employees",
      total: employees?.length,
      parcentage: 11,
      icon: <PiUsersThreeBold />,
      color: "bg-[#EE9D01]",
    },

    {
      title: "Total Tasks",
      total: allTask?.length,
      parcentage: 11,
      icon: <FaBriefcase />,
      color: "bg-[#5F5CF1]",
    },

    {
      title: "Completed Task",
      total: completedTask?.length,
      parcentage: 11,
      icon: <BsGraphUpArrow />,
      color: "bg-[#1BC5BD]",
    },

    {
      title: "Over Due Task",
      total: overDate?.length,
      parcentage: 11,
      icon: <IoMdClose />,
      color: "bg-[#F64E60]",
    },
  ];

  return (
    <div className="w-full h-[397px] flex gap-[25px]">
      <section className="flex flex-col gap-[18px]">
        <div className="grid grid-cols-4 gap-5">
          {datas.map((data, i) => (
            <div
              key={i}
              className="w-[160px] h-[250px] rounded-xl bg-white px-[17px] py-[27px]"
            >
              <div
                className={`w-[42px] h-[42px] rounded-[10px] ${data.color} flex justify-center items-center text-[20px] text-white`}
              >
                {data.icon}
              </div>

              <p className="text-[#464E5F] text-opacity-[70%] text-[14px] mt-[25px]">
                {data.title}
              </p>
              <h2 className="text-[25px] text-[#464E5F] font-semibold mt-[25px]">
                {data.total}
              </h2>
              <p className="text-[#464E5F]">Task</p>
              <p className="mt-3">
                <span className="text-[12px] font-bold text-[#4AB58E]">
                  +35%
                </span>
                <span className="text-[12px] text-opacity-[50%]">
                  This Month
                </span>
              </p>
            </div>
          ))}
        </div>

        <section className="target-point w-full font-Manrope h-[132px] bg-white rounded-[9px] px-[6px] py-[18px] flex justify-center gap-[47px] items-center">
          <div className="w-[114px] h-[94px] bg-[#69D0CA] rounded-[9px] flex justify-center items-center">
            <p className="text-[40px] font-semibold">100</p>
          </div>

          <div>
            <h3 className="text-[25px] text-[#363F5E] uppercase  font-bold">
              Target Point
            </h3>
            <div className="mt-[10px] flex gap-4">
              <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] border-r-[3px] pr-4">
                <ImLink className="text-[24px]" />
                <span className="text-[19px]">Oct 2023</span>
              </p>
              <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] uppercase">
                <BiMessageRoundedDots className="text-[24px]" />
                <span className="text-[19px]">Assign: 200</span>
              </p>
            </div>
          </div>

          <div className="w-[211px]">
            <p className="flex justify-between items-center text-[#7C8DB5] font-semibold text-[19px]">
              <span className="">Progress</span>
              <span className="text-[#363F5E]">45%</span>
            </p>
            <div className="h-[11px] bg-[#E9EAEC] rounded-[9px]">
              <div className="bg-[#307EF3] w-[98px] h-[11px] rounded-[9px] mt-[13px]"></div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full rounded-[12px] p-[24px] bg-white">
        <p className="text-[#464E5F] font-semibold">Top Employees</p>

        <div className="mt-[40px] flex flex-col gap-[25px]">
          {visibleUser?.filter(user => user.type !== "superadmin")?.map((data, i) => (
            <div key={i} className="flex items-center gap-[50px] border-b">
              <div className="flex items-center gap-5 min-w-[170px]">

                <div className="w-[42px] h-[42px] rounded-full bg-slate-300 ">
                  <img src={data.image} alt="" className="w-full h-full rounded-full"/>
                </div>

                <p className="text-textColor text-[14px] font-semibold capitalize">
                  {data?.user?.username}
                </p>
              </div>

              <p className="text-textColor text-[14px] font-semibold  min-w-[180px]">
              {data?.category}
              </p>
              <p className="text-textColor text-[14px] font-semibold  min-w-[80px]">
                {data?.assigned_tasks_total} task
              </p>
              <p className="text-[#04AA77] text-[14px] font-semibold min-w-[80px]">
                {data?.score} pts
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TotalSummaryDashboard;
