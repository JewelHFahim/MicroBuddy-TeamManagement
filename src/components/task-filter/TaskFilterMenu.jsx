/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line no-unused-vars
const TaskFilterMenu = ({status, setStatus}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const menuClass =
    "block px-4 py-3 text-sm text-gray-900 capitalize transition-colors duration-300 transform  hover:bg-blue-500 hover:text-white w-full";
  return (
    <div className="relative inline-block text-[18px] font-semibold text-black">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="relative z-10  w-[184px] h-[60px] rounded-[20px] bg-white flex justify-center items-center gap-[20px] shadow-lg"
      >
        <p className="">All</p>
        <IoIosArrowDown className="text-[24px] text-[#216FED]" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          onClick={closeDropdown}
          className="absolute right-0 z-20 w-[200px] py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
        >
          <button onClick={()=>setStatus("all")} className={menuClass}> All</button>
          <button onClick={()=>setStatus("adminApproval")} className={menuClass}> Admin Approval </button>
          <button onClick={()=>setStatus("todo")} className={menuClass}> To Do </button>
          <button onClick={()=>setStatus("inProgress")} className={menuClass}> In Progress </button>
          <button onClick={()=>setStatus("pause")} className={menuClass}> Pause </button>
          <button onClick={()=>setStatus("checkList")} className={menuClass}> Check List </button>
          <button onClick={()=>setStatus("memberDone")} className={menuClass}> Member Done List </button>
          <button onClick={()=>setStatus("qcProgress")} className={menuClass}>  QC Progress </button>
          <button onClick={()=>setStatus("qcComplete")} className={menuClass}>  QC Complete </button>
          <button onClick={()=>setStatus("qcDone")} className={menuClass}>  QC Done List </button>
        </div>
      )}
    </div>
  );
};

export default TaskFilterMenu;
