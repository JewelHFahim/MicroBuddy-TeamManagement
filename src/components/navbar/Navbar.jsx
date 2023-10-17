import "./Navbar.css";
import { ImLink } from 'react-icons/im';
import { FaUserCheck } from 'react-icons/fa';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { useSelector } from "react-redux";


const Navbar = () => {

    const {email, username} = useSelector(state => state.user)

    return (
        <nav className="nav-container border w-full h-[120px] pl-[33px] pr-[90px]">

            <div className="flex justify-between items-center w-full h-full">


            <section className="target-point w-[590px] font-Manrope h-[94px] bg-white rounded-[9px] px-[6px] py-[13px] flex justify-between items-center">
                
                <div className="w-[82px] h-[68px] bg-[#69D0CA] rounded-[9px] flex justify-center items-center">
                    <p className="text-[27px] font-semibold">100</p>
                </div>
                
                <div>
                    <h3 className="text-[18px] text-[#363F5E] uppercase  font-bold">Target Point</h3>
                    <div className="mt-[10px] flex gap-4">
                        <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] border-r-[3px] pr-4">
                            <ImLink className="text-[17px]"/>
                            <span>October 23</span>
                        </p>
                        <p className="flex items-center gap-[9px] text-[14px] font-semibold text-[#7C8DB5] uppercase">
                            <BiMessageRoundedDots className="text-[17px]"/>
                            <span>Assign: 50</span>
                        </p>
                    </div>
                </div>

                <div className="w-[150px]">
                    <p className="flex justify-between items-center text-[#7C8DB5] text-[14px] font-semibold"><span>Progress</span> <span className="text-[#363F5E]">45%</span></p>
                    <div className="h-[8px] bg-[#E9EAEC] rounded-[9px]">
                        <div className="bg-[#307EF3] w-[70px] h-[8px] rounded-[9px] mt-[13px]"></div>
                    </div>
                </div>

            </section>


            <section className="flex items-center gap-[25px]">

                <div className="relative w-[28px] h-[28px]">
                    <IoNotifications className="text-[28px] text-[#737B8B]"/>
                    <div className="w-[30px] h-[30px] rounded-full bg-[#216FED] border-4 border-[#EDF2F6] absolute top-[-20px] right-[-10px] text-white text-[14px] flex justify-center items-center">4</div>
                </div>

                <div className="relative w-[28px] h-[28px]">
                    <FaUserCheck className="text-[28px] text-[#737B8B]"/>
                    <div className="w-[30px] h-[30px] rounded-full bg-[#ED9B21] border-4 border-[#EDF2F6] absolute top-[-20px] right-[-10px] text-white text-[14px] flex justify-center items-center">4</div>
                </div>

                <div className="flex text-right gap-4 ml-5 font-Poppins">
                    <p className="flex flex-col">
                        <span className="text-[18px]  font-medium text-[#273240] capitalize">{username}</span> 
                        <span className="text-[#737B8B] text-[14px] ">{email}</span>
                    </p>
                    <div className="w-[56px] h-[56px] bg-[#C4C4C4] rounded-full"></div>
                </div>
            </section>
            </div>


        </nav>
    );
};

export default Navbar;