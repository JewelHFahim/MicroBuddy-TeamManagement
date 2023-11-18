import { BsFillCalendarFill } from "react-icons/bs";
import { FaBasketballBall } from "react-icons/fa";
import { PiFolderSimpleMinusBold } from "react-icons/pi";
import ApexChart from "./MyProduct";

const MyProductivity = () => {

  return (
    <div className="mt-[26px] ">
      <h2 className="text-[#0E123E] text-[36px] font-bold">My Productivity</h2>
      <section className="mt-[23px] w-full h-[597px] rounded-[21px] bg-white p-[43px] shadow-lg">
        <section className="w-full flex justify-between">
          <div className="flex items-center gap-[61px]">
            <div className=" flex items-center gap-[17px]">
              <PiFolderSimpleMinusBold className="text-[30px]" />
              <p className="text-[25px] font-Urbanist">Task</p>
            </div>

            <div className="w-[197px] h-[52px] rounded-[36px] bg-[#0E123E] flex justify-center items-center gap-[14px] text-white">
              <FaBasketballBall className="text-[29px]" />
              <p className="text-[25px] font-semibold font-Urbanist">
                Complete
              </p>
            </div>
          </div>

          <div className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex items-center justify-center gap-[20px] text-white">
            <BsFillCalendarFill className="text-[28px]" />
            <p className="text-[18px] font-Poppins font-semibold">Filter</p>
          </div>
        </section>

        <section className="mt-10">
          <ApexChart />
        </section>
      </section>
    </div>
  );
};

export default MyProductivity;
