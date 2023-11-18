import { SlGraph } from "react-icons/sl";
import { PiFolderSimpleMinusBold } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useGetAllTaskQuery } from "../../redux/features/task/taskApi";

const ProjectSummary = () => {

  const {userId} = useSelector(state => state.user);
  const { data: allTask } = useGetAllTaskQuery();

  const totalTask = allTask?.filter(task => task.assignee === userId);
  const inProgress = allTask?.filter(task => task.assignee === userId && task.status === "inprogress");
  const completed = allTask?.filter(task => task.assignee === userId && task.status === "done");
  
  const overDate = allTask?.filter(task => task.status === "done" && task.on_time_completion === false);

  const datas = [
    {
      title: "Assign",
      total: totalTask?.length,
      icon: <FaUserFriends />,
    },

    {
      title: "In Progress",
      total: inProgress?.length,
      icon: <FaUserFriends />,
    },

    {
      title: "Over Date",
      total: overDate?.length,
      icon: <LiaTelegram />,
    },

    {
      title: "Completed",
      total: completed?.length,
      icon: <AiOutlineSetting />,
    },
  ];

  return (
    <div className="mt-[26px]">

      <h2 className="text-[#0E123E] text-[36px] font-bold">Project Summary</h2>

      <section className="mt-[23px] w-full h-[441px] rounded-[21px] bg-white p-[43px] border shadow-lg">

        <section className="w-full flex justify-between border-b-2 border-[#0e123e1a] pb-3">
          <div className=" flex items-center gap-[17px]">
            <PiFolderSimpleMinusBold className="text-[30px]" />
            <p className="text-[25px] font-Urbanist text-textColor text-opacity-[50%]">
              <span className="text-black text-[30px]"> {allTask?.length} </span> Total Task
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[#200E3266] text-[20px] ">
              On time completed rate
            </p>
            <p className="text-[25px]"> { ((overDate?.length / completed?.length) * 100).toFixed(2)}% </p>
            <button className="w-[116px] h-[30px] rounded-[21px] bg-[#0e123e1a] flex items-center justify-center gap-4 text-[18px]">
              <SlGraph /> 3.1%
            </button>
          </div>
        </section>

        <div className=" mt-8 flex gap-[29px]">
          {datas?.map((data, i) => (
            <div
              key={i}
              className="w-[318px] h-[170px] rounded-[22px] border border-[#0e123e1a] flex justify-start gap-[22px] items-center p-[28px] "
            >
              <div className="w-[65px] h-[65px] rounded-full border-2 border-[#0e123e1a] flex justify-center items-center text-[#0E123E] text-[22px]">
                {data?.icon}
              </div>

              <p className="text-[28px]">
                <span>{data?.title}</span> <br />{" "}
                <span className="text-[35px] text-[#0E123E] font-semibold">
                  {data?.total}
                </span>
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default ProjectSummary;
