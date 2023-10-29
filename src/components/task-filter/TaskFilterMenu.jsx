import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TaskFilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const menuClass =
    "block px-4 py-3 text-sm text-gray-900 capitalize transition-colors duration-300 transform  hover:bg-blue-500 hover:text-white";
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
          <a href="#" className={menuClass}>
            To Do
          </a>
          <a href="#" className={menuClass}>
            In Progress
          </a>
          <a href="#" className={menuClass}>
            Pause
          </a>
          <a href="#" className={menuClass}>
            Check List
          </a>
          <a href="#" className={menuClass}>
            Member Done List
          </a>
          {/* QC From Here */}
          <hr />
          <a href="#" className={menuClass}>
            QC Progress
          </a>
          <a href="#" className={menuClass}>
            QC Complete
          </a>
          <a href="#" className={menuClass}>
            QC Done List
          </a>
        </div>
      )}
    </div>
  );
};

export default TaskFilterMenu;
