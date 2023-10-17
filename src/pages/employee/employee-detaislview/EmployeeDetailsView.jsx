import { FiSearch } from "react-icons/fi";
import { BiMessageRoundedDots, BiSolidPieChartAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaEdit, FaUserCheck } from "react-icons/fa";
import { BsCalendarFill, BsEye } from "react-icons/bs";
import { MdMoreTime } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import Title from "../../../utils/Title";
import { ImLink } from "react-icons/im";
import { useUserDetailsQuery } from "../../../redux/features/user/userApi";
import { useParams } from "react-router-dom";

const EmployeeDetailsView = () => {
  const {id} = useParams();
  const {data: userDetails }= useUserDetailsQuery(id);
  console.log(userDetails)

  const datas = [
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

  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "",
      email: "",
      phone_nimber: "",
      position: "",
      salary: "",
    },
  ];

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px] pb-10">
      <Title>My Task </Title>

      {/* Profile Details */}
      <section className="h-[465px] rounded-[46px] bg-[#F2F6FC] flex  justify-between items-center px-[55px]">

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[238px] h-[238px] rounded-[15px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" className="w-full h-full"/>
            </div>
            <div className="font-semibold text-[#273240]">
              <h3 className="text-[40px]  uppercase leading-[60px]">
                {userDetails?.user.username}
              </h3>
              <p className="text-[26px] uppercase">Digital Marketing</p>
              <p className="border-b border-blue-700 border-dashed pb-1 ">
                Email:
                <span className="text-blue-600 font-normal ml-1">
                  {userDetails?.user.email}
                </span>
              </p>
              Password:
              <span className="text-blue-600 font-normal ml-1">Reset Password</span>
            </div>
          </div>

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
        </div>

        <div>
          <div className="flex items-center justify-center gap-4">
            <button className="w-[170px] h-[56px] rounded-[26px] border-2 border-[#FF8723] flex justify-center items-center uppercase text-[#FF8723] text-[19px] font-semibold ">
              {userDetails?.type}
            </button>

            <LiaEditSolid className="text-[61px] text-[#FF8723]" />
          </div>

          <div className="mt-[36px] flex items-center gap-5">

            <div className="w-[234px] h-[283px] bg-[#307EF3] rounded-[10px] p-[24px]">
                <button className="bg-white bg-opacity-[40%] p-3 rounded-lg"><FaEdit className="text-[30px] text-white"/></button>
                <div className="mt-10">
                    <h3 className="text-[40px] text-white font-bold">12</h3>
                    <p className="mt-5 text-[20px] text-white font-medium uppercase">Over Date Lifetime</p>
                </div>

            </div> 

            <div className="w-[234px] h-[283px] bg-[#353F5C] rounded-[10px] p-[24px]">
                <button className="bg-white bg-opacity-[40%] p-3 rounded-lg"><FaEdit className="text-[30px] text-white"/></button>
                <div className="mt-10">
                    <h3 className="text-[40px] text-white font-bold">52</h3>
                    <p className="mt-5 text-[20px] text-white font-medium uppercase">Over Date Lifetime</p>
                </div>

            </div> 

          </div>
        </div>
      </section>

      {/* Search and Filter Btn */}
      <section className="mt-[35px] flex items-center justify-between w-full">
        {/* Search Filed */}
        <div className="w-[827px] h-[60px] rounded-[20px] flex justify-between items-center px-[29px] bg-white shadow-md">
          <input
            type="text"
            placeholder="Search Task Here"
            className="w-[780px] h-[58px] rounded-[20px] focus:outline-none text-[#96A0AF] font-semibold"
          />
          <FiSearch className="text-[24px] text-[#216FED]" />
        </div>

        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          <button className="w-[166px] h-[60px] rounded-[20px] bg-white flex justify-center items-center gap-[36px] shadow-lg">
            <p className="text-[18px] font-semibold text-[#273240]">All</p>
            <IoIosArrowDown className="text-[24px] text-[#216FED]" />
          </button>

          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <BsCalendarFill className="text-[24px] " />
            <p className="text-[18px] font-semibold">Filter</p>
          </button>
        </div>
      </section>

      <section className="mt-[38px] grid grid-cols-4 gap-[45px]">
        {datas.map((item, i) => (
          <div
            key={i}
            className=" w-[331px] h-[126px] rounded-[14px] bg-white shadow-lg flex justify-start items-center px-[30px] py-[24px] gap-[30px]"
          >
            <div
              className={`w-[78px] h-[78px] rounded-[20px] ${item.bg} text-[46px] text-white flex justify-center items-center`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-[36px] font-semibold text-[#273240]">
                {item.total}
              </h3>
              <p className="font-medium text-[#737B8B]">{item.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TO DO */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#FF8723] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white">TO DO</p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2, 3].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#FF8723] font-semibold">
                                TO DO
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In Progress */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#CED200] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white">IN PROGRESS</p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2, 3].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#5DD732] font-semibold uppercase">
                                In Progress
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#24D8CD] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white uppercase">
            Complete
          </p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2, 3].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#24D8CD] font-semibold uppercase">
                                Complete
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pause */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#D86F24] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white uppercase">
            Pause
          </p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#D86F24] font-semibold uppercase">
                                Pause
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CheckList */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#D824C6] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white uppercase">
            CheckList
          </p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#D824C6] font-semibold uppercase">
                                Check List
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOLD */}
      <section className="mt-[32px]">
        <button className="w-[166px] h-[60px] rounded-[20px] bg-[#D86F24] flex justify-center items-center shadow-lg">
          <p className="text-[18px] font-semibold text-white uppercase">HOLD</p>
        </button>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {[1, 2].map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center ">
                  <thead className="text-[#737B8B]">
                    <tr className="font-[300]">
                      <th className="py-3 px-6 "></th>
                      <th className="py-3 px-4 font-[300]">Due Date</th>
                      <th className="py-3 px-4 font-[300]">Assign</th>
                      <th className="py-3 px-4 font-[300]">Check Assign</th>
                      <th className="py-3 px-4 font-[300]"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                          <img
                            src={item.avatar}
                            className="w-[90px] h-[90px]  rounded-[31px]"
                          />
                          <div className="text-left">
                            <span className="block text-[#216FED] font-[300]">
                              C012345
                            </span>
                            <span className="block text-[#273240] text-[20px] font-semibold">
                              Task Name .............
                            </span>
                            <span className="block text-[#216FED] font-[300]">
                              Create Date and Time
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                          12/10/23 <br /> 11.42 am
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-red-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            {[1, 2, 3].map((item, i) => (
                              <div
                                key={i}
                                className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300"
                              />
                            ))}
                            <p className="flex items-center justify-center w-[35px] h-[35px] -mx-1 text-[12px] font-bold text-black bg-white border-2 border-slate-200 rounded-full">
                              +4
                            </p>
                          </div>
                        </td>

                        <td className="text-right px-2 whitespace-nowrap">
                          <div className="flex justify-between items-center px-5 w-full">
                            <button className="w-[131px] h-[43px] rounded-[22px] border border-[#C4C4C4] flex justify-center items-center">
                              <p className="text-[#D86F24] font-semibold uppercase">
                                HOLD
                              </p>
                            </button>
                            <button className="text-[32px] text-black flex justify-center items-center">
                              <BsEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmployeeDetailsView;
