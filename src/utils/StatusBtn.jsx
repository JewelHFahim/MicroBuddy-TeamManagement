/* eslint-disable react/prop-types */

const StatusBtn = ({children, className}) => {
    return (
        <>
            <button type="submit"
              className={`w-[200px] h-[53px] rounded-[44px]  text-[18px] font-medium text-white ${className}`}>
           {children}
            </button>
        </>
    );
};

export default StatusBtn;