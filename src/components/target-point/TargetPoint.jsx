import { BiMessageRoundedDots } from "react-icons/bi";
import { ImLink } from "react-icons/im";

const TargetPoint = () => {
    return (
        <section className="mt-10 target-point w-[590px] font-Manrope h-[94px] bg-white rounded-[9px] px-[6px] py-[13px] flex justify-between items-center">
            <div className="w-[82px] h-[68px] bg-[#69D0CA] rounded-[9px] flex justify-center items-center">
              <p className="text-[27px] font-semibold">100</p>
            </div>

            <div>
              <h3 className="text-[18px] text-[#363F5E] uppercase  font-bold">
                Target Point
              </h3>
              <div className="mt-[10px] flex gap-4">
                <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] border-r-[3px] pr-4">
                  <ImLink className="text-[17px]" />
                  <span>October 23</span>
                </p>
                <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] uppercase">
                  <BiMessageRoundedDots className="text-[17px]" />
                  <span>Assign: 50</span>
                </p>
              </div>
            </div>

            <div className="w-[150px]">
              <p className="flex justify-between items-center text-[#7C8DB5] text-[14px] font-semibold">
                <span>Progress</span>
                <span className="text-[#363F5E]">45%</span>
              </p>
              <div className="h-[8px] bg-[#E9EAEC] rounded-[9px]">
                <div className="bg-[#307EF3] w-[70px] h-[8px] rounded-[9px] mt-[13px]"></div>
              </div>
            </div>
          </section>
    );
};

export default TargetPoint;