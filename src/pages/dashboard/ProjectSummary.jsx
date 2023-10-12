import { SlGraph } from "react-icons/sl";
import { PiFolderSimpleMinusBold } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";

const ProjectSummary = () => {
  return (
    <div className="mt-[26px]">
      <h2 className="text-[#0E123E] text-[36px] font-bold">Project Summary</h2>

      <section className="mt-[23px] w-full h-[441px] rounded-[21px] bg-white p-[43px] border shadow-lg">

        <section className="w-full flex justify-between border-b-2 border-[#0e123e1a] pb-3">
          <div className=" flex items-center gap-[17px]">
            <PiFolderSimpleMinusBold className="text-[30px]" />
            <p className="text-[25px] font-Urbanist text-textColor text-opacity-[50%]">
              <span className="text-black text-[30px]"> 50</span> Total Task
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[#200E3266] text-[20px] ">
              On time completed rate
            </p>
            <p className="text-[25px]">90%</p>
            <button className="w-[116px] h-[30px] rounded-[21px] bg-[#0e123e1a] flex items-center justify-center gap-4 text-[18px]">
              {" "}
              <SlGraph /> 3.1%
            </button>
          </div>
        </section>

        <div className=" mt-8 flex gap-[29px]">

        <div className="w-[318px] h-[170px] rounded-[22px] bg-[#0E123E] flex justify-start gap-[22px] items-center p-[28px]">
          <div className="w-[65px] h-[65px] rounded-full border-2 border-slate-400 flex justify-center items-center text-white text-[22px]">
            <FaUserFriends />
            </div>

            <p className="text-[28px] text-white">
              <span>Assign</span> <br /> <span className="text-[35px] font-semibold">4</span>
            </p>
        </div>

        <div className="w-[318px] h-[170px] rounded-[22px] border border-[#0e123e1a] flex justify-start gap-[22px] items-center p-[28px] ">
          <div className="w-[65px] h-[65px] rounded-full border-2 border-[#0e123e1a] flex justify-center items-center text-[#0E123E] text-[22px]">
            <FaUserFriends />
            </div>

            <p className="text-[28px]">
              <span>In Progress</span> <br /> <span className="text-[35px] text-[#0E123E] font-semibold">10</span>
            </p>
        </div>

        <div className="w-[318px] h-[170px] rounded-[22px] border border-[#0e123e1a] flex justify-start gap-[22px] items-center p-[28px] ">
          <div className="w-[65px] h-[65px] rounded-full border-2 border-[#0e123e1a] flex justify-center items-center text-[#0E123E] text-[22px]">
            <LiaTelegram />
            </div>

            <p className="text-[28px]">
              <span>Over Date</span> <br /> <span className="text-[35px] text-[#0E123E] font-semibold">12</span>
            </p>
        </div>

        <div className="w-[318px] h-[170px] rounded-[22px] border border-[#0e123e1a] flex justify-start gap-[22px] items-center p-[28px] ">
          <div className="w-[65px] h-[65px] rounded-full border-2 border-[#0e123e1a] flex justify-center items-center text-[#0E123E] text-[22px]">
            <AiOutlineSetting />
            </div>

            <p className="text-[28px]">
              <span>Completed</span> <br /> <span className="text-[35px] text-[#0E123E] font-semibold">24</span>
            </p>
        </div>

        </div>
        
       

      </section>
    </div>
  );
};

export default ProjectSummary;
