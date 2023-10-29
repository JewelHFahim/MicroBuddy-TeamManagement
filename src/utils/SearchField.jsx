import { FiSearch } from "react-icons/fi";

const SearchField = () => {
  return (
    <div className="w-[827px] h-[60px] rounded-[20px] flex justify-between items-center px-[29px] bg-white shadow-md">
      <input
        type="text"
        placeholder="Search Task Here"
        className="w-[780px] h-[58px] rounded-[20px] focus:outline-none text-[#96A0AF] font-semibold"
      />
      <FiSearch className="text-[24px] text-[#216FED]" />
    </div>
  );
};

export default SearchField;
