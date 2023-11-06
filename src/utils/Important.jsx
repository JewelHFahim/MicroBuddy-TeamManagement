import { BiSolidPieChartAlt } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMoreTime } from "react-icons/md";

export const datas = [
  {
    total: 245,
    title: "Total Assign",
    icon: <FaUserCheck />,
    bg: "bg-[#216FED]",
  },
  {
    total: 5623,
    title: "Completed",
    icon: <BiSolidPieChartAlt />,
    bg: "bg-[#CED200]",
  },
  {
    total: 312,
    title: "Total Assign",
    icon: <IoCheckmarkDoneCircle />,
    bg: "bg-[#216FED]",
  },
  {
    total: 415,
    title: "Over Date",
    icon: <MdMoreTime />,
    bg: "bg-[#ED9B21]",
  },
];


export const userProPic = "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";


export const qcButtonStyle = "w-[160px] h-[60px] rounded-xl text-[18px] font-semibold bg-white shadow-md text-green-700 border border-green-100 shadow-green-200";

export const memberBtnStyle = "w-[160px] h-[60px] rounded-[20px] text-[18px] font-semibold bg-white shadow-md text-blue-700 border border-blue-100 shadow-blue-200"