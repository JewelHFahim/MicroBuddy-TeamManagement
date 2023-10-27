import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RadioButtonStyle } from "../../../utils/ClassList";
import CreateDate from "../../../utils/CreateDate";
import { setHours, setMinutes } from "date-fns";
import {
  useGetAllCheckListQuery,
  useGetAllQCUserQuery,
  // useUpdateQCUserMutation,
  useUpdateTaskMutation,
  useViewTaskQuery,
} from "../../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { MdFileCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFlagFill } from "react-icons/bs";
import StatusBtn from "../../../utils/StatusBtn";

const UpdateMyTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const { data: viewTask } = useViewTaskQuery(id);
  console.log(viewTask);
  const { data: allOptions } = useGetAllCheckListQuery();
  const { data: allQCUsers } = useGetAllQCUserQuery();

  const qcUserId = viewTask?.pairs?.map((qcuid) => {
    return qcuid;
  });

  // const qcStatus = allQCUsers?.map((qc) => {
  //   return qc;
  // });
  // console.log(qcStatus);

  const mappedqc = qcUserId
    ?.map((qcuid) => qcuid?.qc_check_id)
    ?.find((qcId) => qcId !== undefined);
  console.log(mappedqc);

  // const [updateQCUser] = useUpdateQCUserMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data: allUser } = useGetAllUserQuery();

  const [isChecked, setIsChecked] = useState();
  const handleRadioChange = (i) => {
    setIsChecked(i);
  };

  const assigneeName = allUser?.find((user) => {
    if (user.user.id === viewTask?.assignee) {
      return user;
    }
  });

  // ============================>> UPDATE FORM <<========================

  const [state, setState] = useState(false);
  const [index, setIndex] = useState();
  console.log(state);
  const onSubmitQCCheckedStatus = (newCheckStatus, index) => {
    setIndex(index);
    console.log(newCheckStatus, "index:", index);
    setState(!newCheckStatus);
    const data = { is_checked: newCheckStatus };
  //  const res =  updateQCUser({ data, mappedqc });
   console.log(res)
  };

  const handleStatusChange = (newStatus) => {
    const data = { status: newStatus };
    console.log({ data, id });
    updateTask({ data, id });
  };

  const onSubmitLink = (data, event) => {
    event.preventDefault();
    const form = event.target;
    updateTask({ data, id });
    toast.success("Task Location Submitted");
    form.reset();
  };

  return (
    <div className="pb-[300px]">
      <Title>Update MyTask</Title>

      <section className="w-full h-[97px] rounded-[15px] bg-[#F2F6FC] flex gap-4 justify-between items-center px-4">
        <div>
          <p className="text-[#737B8B] uppercase">Created</p>
          <p className="text-[#216FED] font-medium">Oct 2, 2013 - 11:08</p>
        </div>

        <div>
          <p className="text-[#737B8B] uppercase">Due Date</p>
          <p className="text-red-500 font-medium">Oct 2, 2013 - 11:08</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#737B8B] uppercase">Assigned</p>
          <div className="flex">
            <div className="w-[40px] h-[40px] bg-orange-300 rounded-full border-2 border-white ml-[-10px]"></div>
            <div className="w-[40px] h-[40px] bg-red-300 rounded-full border-2 border-white ml-[-10px]"></div>
            <div className="w-[40px] h-[40px] bg-green-300 rounded-full border-2 border-white ml-[-10px]"></div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#737B8B] uppercase">Priority</p>
          <div className="w-[50px] h-[50px] rounded-full border-2 ml-[-10px] border-dashed border-yellow-400 flex justify-center items-center">
            <BsFlagFill className="text-[25px] text-yellow-400" />
          </div>
        </div>

        <div className="w-[227px] h-[54px] rounded-[10px] border border-blue-600 flex justify-center items-center">
          <p className="text-[23px] uppercase font-medium text-blue-600 ">
            Task Point - 10
          </p>
        </div>
      </section>

      <section className="flex justify-between gap-[40px] mt-5">
        <div className="w-[50%]">
          {/* title and description */}
          <div className="mt-5 w-[712px] h-[524px] bg-[#F2F6FC] border border-blue-700 rounded-[15px] shadow-md p-[40px] text-[#273240]">
            <h1 className="text-[34px] font-semibold">{viewTask?.task_name}</h1>
            <p className="text-[25px] font-light">{viewTask?.task_name}</p>
          </div>

          <div className="mt-[27px] w-[712px] h-[187px] rounded-[15px] bg-[#F2F6FC] p-[30px]">
            <h2 className="text-[34px] text-secondary font-semibold">
              Task File Location.
            </h2>

            <form
              onSubmit={handleSubmit(onSubmitLink)}
              className="w-full h-[67px] rounded-[15px] flex items-center"
            >
              <input
                {...register("task_submit")}
                type="text"
                placeholder="Task File Link...."
                className="w-[75%] h-full px-5 placeholder:text-blue-600 placeholder:text-opacity-[50%] focus:outline-none text-[25px] rounded-s-[15px]"
              />

              <button
                type="submit"
                className="w-[25%] h-full border bg-blue-400 hover:bg-blue-300 rounded-e-[15px] text-[22px] font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Check List + Assign */}
          <section className="mt-[50px] flex justify-between">
            {/* Check List */}
            <div className="">
              <h2 className="text-[34px] font-semibold">
                Check List-({viewTask?.pairs?.length})
              </h2>
              <div className="mt-8 flex flex-col gap-[20px] pl-10">
                {viewTask?.pairs?.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">

                    <div className="flex items-center">
                      {allQCUsers
                        ?.filter(
                          (optionItem) => optionItem.id === item?.qc_check_id
                        )
                        .map((filteredItem) => (
                          <div key={filteredItem.id}>
                            <p>from db-{filteredItem.is_checked.toString()}</p>
                            <button
                              onClick={() => onSubmitQCCheckedStatus(state, i)}
                              className="w-[25px] h-[25px] rounded-full border-2 border-blue-700 flex justify-center items-center"
                            >
                              <div
                                className={` w-[15px] h-[15px] rounded-full  ${
                                  filteredItem.is_checked.toString() === true && index === i
                                    ? "bg-blue-700"
                                    : "bg-transparent"
                                }`}
                              ></div>
                            </button>
                          </div>
                        ))}
                    </div>
               
                    <div className="text-[20px] text-black font-semibold">
                      {allOptions
                        ?.filter(
                          (optionItem) => optionItem.id === item?.qc_check_id
                        )
                        .map((optionItem, j) => (
                          <p key={j}>{optionItem.option_text}</p>
                        ))}
                    </div>

                    <div className="w-[30px] h-[30px] rounded-full border-2 bg-yellow-300 flex justify-center items-center capitalize cursor-pointer">
                      {allQCUsers
                        ?.filter(
                          (optionItem) => optionItem.id === item?.qc_check_id
                        )
                        .map((optionItem, i) => (
                          <p key={i}>{optionItem.username.charAt(0)}</p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/*Activity*/}
          <section>
            <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] w-[712px] h-[666px] p-[40px]">
              <h2 className="text-secondary text-[20px] font-semibold">
                Activity
              </h2>

              <div className="mt-[40px] flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-yellow-300"></div>

                <div className="flex flex-col">
                  <p className="text-secondary text-[18px]">Lily Anderson</p>
                  <p className="text-[10px] text-[#7C8DB5]">Today 10:15 AM</p>

                  <div className="mt-5">
                    <p className="font-semibold">Checked on Text</p>
                    <p className="bg-[#F7F7F8] p-5 rounded-md w-[313px] h-[110px]">
                      That’s pretty good. For the Hero section, maybe you can
                      reduce some objects for white space.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[40px] flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-[#DDDEFD]"></div>

                <div className="flex flex-col">
                  <p className="text-secondary text-[18px]">Luckman Brown</p>
                  <p className="text-[10px] text-[#7C8DB5]">
                    Yesterday, 05:25 PM
                  </p>

                  <div className="mt-5">
                    <p className="font-semibold">Complete to Task</p>
                    <p className="bg-[#F7F7F8] p-5 rounded-md w-[313px] h-[110px]">
                      Complete to Task
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/***************************** * SECOND COLUMN *******************************/}

        <section className="w-[50%]">
          {/* Crate Task Btn */}
          <p> status:--- {viewTask?.status} </p>

          <div className="flex items-center gap-6 justify-end">
            <div className="flex flex-col gap-5">
              <>
                {
                  viewTask?.status === "todo" && (
                    <button
                      onClick={() => handleStatusChange("inprogress")}
                      className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                    >
                      Start Work
                    </button>
                  )
                }
              </>

              <>
                {viewTask?.status === "inprogress" ||
                viewTask?.status === "todo" ||
                viewTask?.status === "pause" ? (
                  <button
                    onClick={() => handleStatusChange("inprogress")}
                    className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                  >
                    In Progress
                  </button>
                ) : (
                  <button
                    className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                  >
                    In Progress
                  </button>
                )}
              </>
            </div>

            <>
              {viewTask?.status === "inprogress" ||
              viewTask?.status === "pause" ? (
                <button
                  onClick={() => handleStatusChange("pause")}
                  className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                >
                  Pause
                </button>
              ) : (
                <button
                  className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                >
                  Pause
                </button>
              )}
            </>

            <>
              {viewTask?.status === "inprogress" ||
              viewTask?.status === "checklist" ? (
                <button
                  onClick={() => handleStatusChange("checklist")}
                  className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                >
                  Check List
                </button>
              ) : (
                <button
                  className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                >
                  Check List
                </button>
              )}
            </>
          </div>

          {/* Chatting */}
          <section className=" w-full">
            <div className="mt-[100px] w-fll rounded-[15px] shadow-lg bg-[#F2F6FC] p-[30px]">
              <h1 className="text-[30px] font-semibold text-[#273240] uppercase">
                Chat.
              </h1>

              <div className="mt-[43px] flex flex-col gap-10">
                <div className="flex items-start gap-[31px]">
                  <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
                  <p className="font-[300px] w-[60%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium
                  </p>
                </div>

                <div className="flex justify-end items-start gap-[31px]">
                  <p className="font-[300px] w-[60%] text-right">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium
                  </p>
                  <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FF9C82]"></div>
                </div>

                <div className="flex items-start gap-[31px]">
                  <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
                  <p className="font-[300px] w-[60%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium
                  </p>
                </div>

                <div className="flex justify-end items-start gap-[31px]">
                  <p className="font-[300px] w-[60%] text-right">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium
                  </p>
                  <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FF9C82]"></div>
                </div>

                <div className="flex items-start gap-[31px]">
                  <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
                  <p className="font-[300px] w-[60%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium
                  </p>
                </div>
              </div>

              <div className="mt-10 w-full h-[162px] rounded-[15px] border border-[#216FED] shadow-md flex flex-col items-end">
                <input
                  type="text"
                  placeholder="write....."
                  className="w-full h-[70%] rounded-[15px] focus:outline-none bg-transparent px-4"
                />

                <button className="w-[143px] h-[38px] border border-[#216FED] rounded-[12px] text-[20px] font-medium uppercase text-[#216FED] mx-[10px]">
                  Send
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default UpdateMyTask;
