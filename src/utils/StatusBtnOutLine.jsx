/* eslint-disable react/prop-types */

const StatusBtnOutLine = ({children, className}) => {
  return (
    <div>
      <button className={`w-[150px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center font-semibold ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default StatusBtnOutLine;
