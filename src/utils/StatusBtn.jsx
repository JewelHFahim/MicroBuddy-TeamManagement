
const StatusBtn = ({children}) => {
    return (
        <>
            <button type="submit"
              className="w-[200px] h-[53px] rounded-[44px] bg-[#216FED] text-[18px] font-medium text-white">
           {children}
            </button>
        </>
    );
};

export default StatusBtn;