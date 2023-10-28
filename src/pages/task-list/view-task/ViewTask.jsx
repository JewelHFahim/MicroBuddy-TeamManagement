import Title from "../../../utils/Title";
import { BsFlagFill } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useDeleteTaskMutation,
  useGetAllCheckListQuery,
  useGetTaskListByQcIdQuery,
  useGetQCStatusByQcIdQuery,
  useViewTaskQuery,
  useUpdateTaskMutation,
} from "../../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qcId, setQcId] = useState();
  const { data: viewTask } = useViewTaskQuery(id);
  const { data: allUsers } = useGetAllUserQuery();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const { data: allOptions } = useGetAllCheckListQuery();
  const { data: QCListBytaskId } = useGetTaskListByQcIdQuery(id);
  const { data: qcStatusList } = useGetQCStatusByQcIdQuery(qcId);
  const {type} = useSelector(state=> state.user)

  useEffect(() => {
    const isChekedStatus = QCListBytaskId?.map((ck) => setQcId(ck.id));
    console.log(isChekedStatus);
  }, [QCListBytaskId]);

  const hnadleTaskDelete = (taskid) => {
    deleteTask(taskid);
    toast.error("Deleted");
    navigate("/task-list");
  };

  const handleStatusChange = (newStatus) => {
    const data = { status: newStatus };
    console.log({ data, id });
    updateTask({ data, id });
  };

  return (
    <div>
      <Title>View Task</Title>

      {/* Pause and Complete Btn */}
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

        <div className="w-[227px] h-[54px] rounded-[10px] border border-blue-600 flex justify-center items-center">
          <p className="text-[23px] uppercase font-medium text-blue-600 ">
            In Progress
          </p>
        </div>

        <div className="flex gap-8">
          <button>
            <MdFileCopy className="text-[45px]" />
          </button>
          <Link to={`/edit-task/${id}`}>
            <button>
              <FiEdit className="text-[45px]" />
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-[27px] flex gap-[40px]">
        {/* 1st column */}
        <section>
          <div className="w-[712px] h-[523px] rounded-[15px] bg-[#F2F6FC] p-[40px]">
            <h2 className="text-[34px] text-secondary font-semibold">
              {viewTask?.task_name}
            </h2>
            <p className="text-[25px] font-[300] mt-8">
              {viewTask?.description}
            </p>
          </div>

          <div className="mt-[27px] w-[712px] h-[187px] rounded-[15px] bg-[#F2F6FC] p-[30px]">
            <h2 className="text-[34px] text-secondary font-semibold">
              Task File Location.
            </h2>
            <input
              disabled
              defaultValue={viewTask?.task_submit}
              type="text"
              placeholder="Google Drive Link..."
              className="w-full h-[67px] rounded-[15px] px-5 placeholder:text-blue-600 focus:outline-none text-[25px]"
            />
          </div>

          {/* Check List */}
          <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] py-[12px] px-[30px]">
            <h2 className="text-[26px] font-semibold">Check List</h2>

            <div className="flex items-center gap-5">
              {/* Radio Button */}
              <div>
                {qcStatusList?.map((st) => (
                  <div key={st.id}>
                    <button
                      disabled
                      className="w-[25px] h-[25px] rounded-full border-2 border-blue-700 flex justify-center items-center"
                    >
                      <div
                        className={`w-[15px] h-[15px] rounded-full ${
                          st.is_checked === true
                            ? "bg-blue-700 "
                            : "bg-transparent"
                        }`}
                      ></div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Option Ttile */}
              <div>
                {QCListBytaskId?.map((qc) => {
                  const optionsText = allOptions?.find(
                    (option) => option.id === qc.check_text
                  );
                  console.log(optionsText);
                  if (optionsText) {
                    return (
                      <p
                        key={optionsText?.id}
                        className="text-[25px] font-medium"
                      >
                        {optionsText.option_text}
                      </p>
                    );
                  } else {
                    return (
                      <p key={optionsText?.id}>User with userId not found</p>
                    );
                  }
                })}
              </div>

              {/* QC User Name */}
              <div>
                {QCListBytaskId?.map((qc) => {
                  const user = allUsers?.find(
                    (user) => user.user.id === qc.user
                  );
                  if (user) {
                    return (
                      <p
                        key={user.id}
                        className="w-[55px] h-[55px] rounded-full flex justify-center items-center text-[25px] bg-green-200 border-[4px] border-green-300"
                        title={`${user.user.username}`}
                      >
                        {user.user.username.charAt(0)}
                      </p>
                    );
                  } else {
                    <p>User with userId not found</p>;
                  }
                })}
              </div>
            </div>
          </div>

          <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] w-full h-[800px] p-[40px]">
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

        {/* 2nd column */}
        <section className=" w-full">

          {/* For QC Status Update */}
          { type !== "superadmin" || type !== "admin"   && (
            <div className="flex items-center gap-6 justify-end">
             

              <>
                {viewTask?.status === "qc_progress" ? (
                  <button
                    onClick={() => handleStatusChange("qc_progress")}
                    className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                  > QC Progress </button>
                ) : (
                  <button
                    className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                  > QC Progress </button>
                )}
              </>

              <>
                  <button
                    onClick={() => handleStatusChange("done")}
                    className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                  > Mark As Done </button>

              </>
            </div>
          )}



          {/* Chating UI */}
          <div className="mt-[27px] w-fll rounded-[15px] shadow-lg bg-[#F2F6FC] p-[30px]">
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

          <div className="mt-[50px] flex justify-end ">
            <button
              onClick={() => hnadleTaskDelete(id)}
              className="w-[388px] h-[53px] rounded-[44px] bg-[#ED2121] text-[20px] text-white font-medium uppercase"
            >
              Delete This Project
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ViewTask;
