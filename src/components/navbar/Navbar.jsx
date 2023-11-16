import "./Navbar.css";
import { FaUserCheck } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import {  useSelector } from "react-redux";
import TargetPoint from "../target-point/TargetPoint";
import NotificationList from "../notification/NotificationList";
import { useState } from "react";
import { useGetAllNotificationQuery } from "../../redux/features/notification/NotificationApi";
import { useUserDetailsQuery } from "../../redux/features/user/userApi";

const Navbar = () => {

  const { email, username, userId } = useSelector((state) => state.user);
  const { data: userDetails } = useUserDetailsQuery(userId);
  console.log(userDetails)
  const { data: allNotification } = useGetAllNotificationQuery();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <nav className="nav-container border w-full h-[120px] pl-[33px] pr-[90px]">

      <div className="flex justify-between items-center w-full h-full">

        {/* target Points */}
        <div className="-mt-10">
          <TargetPoint userDetails={userDetails} />
        </div>

        <NotificationList
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          allNotification={allNotification}
        />

        <section className="flex items-center gap-[25px]">
          <button
            onClick={openModal}
            className="relative w-[28px] h-[28px] cursor-pointer hover:scale-[1.03]   rounded-full"
          >
            <IoNotifications className="text-[28px] text-[#737B8B]" />

            <div className="w-[20px] h-[20px] rounded-full bg-[#216FED] border-4 border-[#EDF2F6] absolute
             top-[-10px] right-[-5px] text-white text-[14px] flex justify-center items-center">
            </div>
          </button>

          <div className="relative w-[28px] h-[28px]">
            <FaUserCheck className="text-[28px] text-[#737B8B]" />
            <div className="w-[30px] h-[30px] rounded-full bg-[#ED9B21] border-4 border-[#EDF2F6] absolute top-[-20px] right-[-10px] text-white text-[14px] flex justify-center items-center">
              4
            </div>
          </div>

          <div className="flex text-right gap-4 ml-5 font-Poppins">
            <p className="flex flex-col">
              <span className="text-[18px]  font-medium text-[#273240] capitalize">
                {username}
              </span>
              <span className="text-[#737B8B] text-[14px] ">{email}</span>
            </p>
            <div className="w-[56px] h-[56px] bg-[#C4C4C4] rounded-full">
              <img src={userDetails?.image} alt="" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </section>

      </div>

    </nav>
  );
};

export default Navbar;
