import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarFill } from "react-icons/bs";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";
import InProgress from "./categorry/InProgress";
import { datas } from "../../utils/Important";
import Todo from "./categorry/Todo";
import Complete from "./categorry/Complete";
import Pause from "./categorry/Pause";
import CheckList from "./categorry/CheckList";
import QCProgress from "./categorry/QCProgress";
import QCComplete from "./categorry/QCComplete";

const TaskList = () => {
  const redirect = "view-task"
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

      {/*  <<=========== TODO ============>>  */}
      <Todo redirect={redirect}/>

      {/*  <<======== IN PROGRESS ========>>  */}
      <InProgress redirect={redirect}/>

      {/*  <<========== COMPLETE =========>>  */}
      <Complete />

      {/*  <<========== PAUSE ============>>  */}
      <Pause redirect={redirect}/>

      {/*  <<======== CHECKLIST ==========>>  */}
      <CheckList redirect={redirect}/>

      {/*  <<======= QC PROGRESS =========>>  */}
      <QCProgress redirect={redirect}/>

      {/*  <<======= QC COMPLETE =========>>  */}
      <QCComplete />
    </div>
  );
};

export default TaskList;
