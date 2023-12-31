/* eslint-disable react/prop-types */
const StatusTitle = ({ children, className }) => {
  return (
    <button className={`w-[180px] h-[50px] rounded-[20px] flex justify-center items-center shadow-lg ${className}`}>
      <p className="text-[18px] font-semibold text-white">{children}</p>
    </button>
  );
};

export default StatusTitle;
