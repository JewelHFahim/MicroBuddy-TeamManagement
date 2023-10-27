import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreateDate from "../../../utils/CreateDate";
import { setHours, setMinutes } from "date-fns";
import {
  useGetAllCheckListQuery,
  useGetTaskListByQcIdQuery,
  useGetQCStatusByQcIdQuery,
  useUpdateQCUserStatusMutation,
  useUpdateTaskMutation,
  useViewTaskQuery,
} from "../../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useEffect } from "react";

const EditTask = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const { data: allOptions } = useGetAllCheckListQuery();
  const { data: viewTask } = useViewTaskQuery(id);
  const { data: QCListBytaskId } = useGetTaskListByQcIdQuery(id);
  const { data: allUsers } = useGetAllUserQuery();

  const [qcId, setQcId] = useState();
  const { data: qcStatusList } = useGetQCStatusByQcIdQuery(qcId);
  useEffect(() => {
    const isChekedStatus = QCListBytaskId?.map((ck) => setQcId(ck.id));
    console.log(isChekedStatus);
  }, [QCListBytaskId]);

  const qcUserId = viewTask?.pairs?.map((qcuid) => {
    return qcuid;
  });

  const mappedqc = qcUserId
    ?.map((qcuid) => qcuid?.qc_check_id)
    ?.find((qcId) => qcId !== undefined);
  console.log(mappedqc);

  const [updateQCUserStatus] = useUpdateQCUserStatusMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data: allUser } = useGetAllUserQuery();

  const assigneeName = allUser?.find((user) => {
    if (user.user.id === viewTask?.assignee) {
      return user;
    }
  });

  console.log(assigneeName?.user?.username);

  // ============================>> UPDATE FORM <<====================

  const [checkStatu, setCheckStatus] = useState(false);
  const handleCheckStatus = () => {
    setCheckStatus(!checkStatu);
  };

  const onSubmit = (data) => {
    const upd = { ...data, due_date: startDate };
    console.log(upd);
    updateTask({ data: upd, id });

    const is_checked = { is_checked: checkStatu };
    updateQCUserStatus({ data: is_checked, qcId });
    toast.success("Updated");
    navigate(`/view-task/${id}`);
  };

  // ============>> UPDATE QC CHECK RADIO BUTTON STATUS <<=============

  return (
    <div className="pb-[300px]">
      <Title>Edit Task</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Crate Task Btn */}
        <div className="flex items-center gap-6 justify-end">
          <select
            {...register("status")}
            className="w-[236px] h-[54px] rounded-[10px] border border-[#216FED] text-[#216FED] text-[22px] font-medium flex items-center justify-center gap-1 uppercase px-5 focus:outline-none"
          >
            <option value="todo">Todo</option>
            <option value="inprogress">In Progress</option>
            <option value="pause">Pause</option>
            <option value="checklist">Check List</option>
            <option value="qc_progress">QC Progress</option>
            <option value="qc_complete">QC Completed</option>
            <option value="done">Done</option>
          </select>

          <button
            type="submit"
            className="w-[267px] h-[71px] rounded-[58px] bg-[#216FED] text-[22px] font-medium text-white flex items-center justify-center gap-4"
          >
            <FaClipboardList className="text-[35px]" /> Update Task
          </button>
        </div>

        {/* Task Title Input */}
        <div>
          <label className="text-[34px] font-semibold text-secondary pl-2">
            Task Title
          </label>
          <input
            {...register("task_name")}
            defaultValue={viewTask?.task_name}
            type="text"
            placeholder="Title here"
            className="w-full h-[66px] rounded-[46px] border border-[#216FED] px-6 focus:outline-none"
          />
        </div>

        {/* Task Desc Input */}
        <div className="mt-5">
          <label className="text-[34px] font-semibold text-secondary pl-2">
            Task Details
          </label>
          <textarea
            defaultValue={viewTask?.description}
            {...register("description")}
            cols="177"
            rows="14"
            placeholder="Details"
            className="rounded-[46px] border border-[#216FED] p-6 focus:outline-none"
          ></textarea>
        </div>

        {/* Check List + Assign */}
        <section className="mt-[50px] flex justify-between">
          {/* Check List */}
          <div className="">
            <h2 className="text-[34px] font-semibold">Check List -</h2>

            <div className="flex items-center gap-5">
              {/* Radio Button */}
              <div>
                {qcStatusList?.map((st) => (
                  <div key={st.id}>
                    <button
                      onClick={handleCheckStatus}
                      className="w-[25px] h-[25px] rounded-full border-2 border-blue-700 flex justify-center items-center"
                    >
                      <div
                        className={`w-[15px] h-[15px] rounded-full ${
                          st.is_checked === true && checkStatu === true
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

          {/* Points */}
          <div className="flex flex-col items-center">
            <h2 className="text-[34px] font-semibold">Points</h2>
            <input
              {...register("points")}
              type="number"
              placeholder="points"
              className="w-[100px] font-semibold h-[35px] rounded-[46px] border border-[#216FED] px-6 focus:outline-none"
            />
          </div>

          {/* Assign */}
          <div className=" pr-12">
            <h2 className="text-[34px] font-semibold">Assign-(2)</h2>
            <div className="mt-8 flex flex-col gap-[20px]">
              <div className="flex items-center gap-4">
                <div className="w-[40px] h-[40px] rounded-full border-2 bg-yellow-300"></div>
                <p className="text-[24px] text-black font-semibold  capitalize">
                  {assigneeName?.user?.username}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Date and Priority */}
        <section className="mt-[50px] flex justify-between mr-32">
          <div>
            <h2 className="text-[34px] font-semibold">
              Set Due Date and Time.
            </h2>

            <div className="flex items-center gap-4">
              <p className="text-[25px] text-blue-700">
                <CreateDate startDate={startDate} setStartDate={setStartDate} />
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[34px] font-semibold">Task Prio.</h2>
            <div className="flex items-center gap-2">
              <select
                {...register("priority")}
                data-te-select-init
                className="mt-4 w-[200px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default EditTask;
