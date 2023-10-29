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
    if (QCListBytaskId && QCListBytaskId.length > 0) {
      setQcId(QCListBytaskId[0].id);
    }
  }, [QCListBytaskId]);

  let QCID = null;

  if (Array.isArray(qcStatusList) && qcStatusList.length > 0) {
    const [firstQcStatus] = qcStatusList;
    QCID = firstQcStatus?.id;
  }

  const [updateQCUserStatus] = useUpdateQCUserStatusMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data: allUser } = useGetAllUserQuery();

  const assigneeName = allUser?.find((user) => {
    if (user.user.id === viewTask?.assignee) {
      return user;
    }
  });

  // ============================>> UPDATE FORM <<====================
  const [status, setStatus] = useState(viewTask?.status);
  const [task_name, setTask_name] = useState(viewTask?.task_name);
  const [description, setDescription] = useState(viewTask?.description);
  const [points, setPoints] = useState(viewTask?.points);
  const [priority, setPriority] = useState(viewTask?.priority);
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = () => {
    const upd = {
      task_name,
      description,
      points,
      status,
      priority,
      due_date: startDate,
    };
    console.log(upd);
    updateTask({ data: upd, id });

    if (status !== undefined) {
      upd.status = status;
    }
    if (task_name !== undefined) {
      upd.task_name = task_name;
    }
    if (description !== undefined) {
      upd.description = description;
    }
    if (points !== undefined) {
      upd.points = points;
    }
    if (priority !== undefined) {
      upd.priority = priority;
    }
    const data = { is_checked: isChecked };
    console.log(data);
    updateQCUserStatus({ data, QCID });

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
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
            // {...register("task_name")}
            value={task_name}
            onChange={(e) => setTask_name(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={viewTask?.description}
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
                <input
                  type="radio"
                  checked={isChecked}
                  onClick={handleRadioClick}
                  className="w-[25px] h-[25px]"
                />
              </div>

              {/* Option Ttile */}
              <div className="flex flex-col gap-2">
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
              <div className="flex flex-col gap-2">
                {QCListBytaskId?.map((qc) => {
                  const user = allUsers?.find(
                    (user) => user.user.id === qc.user
                  );
                  if (user) {
                    return (
                      <p
                        key={user.id}
                        className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[25px] bg-green-200 border-[4px] border-green-300"
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
              value={points}
              onChange={(e) => setPoints(e.target.value)}
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
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
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
