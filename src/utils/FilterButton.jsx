import { BsCalendarFill } from "react-icons/bs";

const FilterButton = () => {
  return (
    <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
      <BsCalendarFill className="text-[24px] " />
      <p className="text-[18px] font-semibold">Filter</p>
    </button>
  );
};

export default FilterButton;
