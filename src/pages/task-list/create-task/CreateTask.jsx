import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetAllUserQuery,
  useUserDetailsQuery,
} from "../../../redux/features/user/userApi";
import { useForm } from "react-hook-form";
import CreateDate from "../../../utils/CreateDate";
import { useState } from "react";
import { setHours, setMinutes } from "date-fns";
import toast from "react-hot-toast";
import axios from "axios";
import { LiaUserPlusSolid } from "react-icons/lia";
import "./CreateTask.css";
import TextEditor from "../../../components/text-editor/TextEditor";
import { encode as base64_encode } from "base-64";

const CreateTask = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const { userId, token } = useSelector((state) => state.user);
  const { data: allUser } = useGetAllUserQuery();
  const { data: currentUser } = useUserDetailsQuery(userId);
  console.log(currentUser?.image);
  const [content, setContent] = useState("");

  const baseurl = "https://jabedahmed.pythonanywhere.com";
  const headers = {
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  };

  const [isPosting, setIsPosting] = useState(false); // Initialize loading state

  const onSubmit = async (data, event) => {
    event.preventDefault();
    let encoded = base64_encode(content);

    try {
      setIsPosting(true);

      // Step 1: Create a Task
      const taskData = {
        task_name: data.task_name,
        description: encoded,
        due_date: startDate,
        points: data.points,
        priority: data.priority,
        assigner: userId,
        image: currentUser?.image,
        assignee: parseInt(data.assignee),
      };
      console.log(taskData);

      const taskResponse = await axios.post(
        `${baseurl}/task-create/`,
        taskData,
        headers
      );
      console.log(taskResponse);
      const taskId = taskResponse.data.id;

      // Step 2: Create a qc_task using the taskId
      const optionText = { option_text: data.option_text };
      const checkTextResponse = await axios.post(
        `${baseurl}/option-create/`,
        optionText
      );
      const checkTextId = checkTextResponse.data.id;
      console.log(checkTextResponse);

      // Step 3: Create a qc_task using the taskId
      const qc_task = {
        task: taskId,
        user: parseInt(data.user),
        check_text: checkTextId,
      };
      const qcTaskResponse = await axios.post(
        `${baseurl}/qc-task-create/`,
        qc_task,
        headers
      );
      const qcTaskId = qcTaskResponse.data.id;
      console.log(qcTaskResponse);

      // Step 4: Create a qc_status using the qcTaskId
      const qc_status = { qc: qcTaskId, is_checked: false, comment: null };

      // Step 4: Create a qc-status-create using the taskId
      const qcStatusResponse = await axios.post(
        `${baseurl}/qc-status-create/`,
        qc_status,
        headers
      );
      console.log(qcStatusResponse);

      toast.success("Task Created");
      navigate("/task-list");
    } catch (error) {
      console.log(errors);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="pb-[300px]">
      <Title>Create Task</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Crate Task Btn */}
        <div className="flex justify-end">
          <button
            disabled={isPosting}
            type="submit"
            className="w-[268px] h-[60px] rounded-[58px] bg-[#216FED] text-[22px] font-medium text-white"
          >
            {isPosting ? (
              <button className="flex justify-center items-center gap-4 px-5">
                <div className="loader"></div>
                Creating . . .
              </button>
            ) : (
              <p className="flex items-center justify-center gap-4">
                <FaClipboardList className="text-[30px]" /> Create Task
              </p>
            )}
          </button>
        </div>

        {/* Task Title Input */}
        <div>
          <label className="text-[34px] font-semibold text-secondary pl-2">
            Task Title
          </label>
          <input
            {...register("task_name")}
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

          <TextEditor content={content} setContent={setContent} />
        </div>

        {/* Check List + QC User +  Points + Assign */}
        <section className="mt-[50px] flex justify-between">
          <div className="">
            <div className="mt-8">
              <h2 className="text-[25px] font-semibold">Add Check List Item</h2>
              <div className=" w-[358px] h-[45px] rounded-[46px] bg-white border border-blue-700 flex justify-between items-center pr-4">
                <input
                  type="text"
                  {...register("option_text", { required: true })}
                  className="w-[300px] h-[40px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold bg-white"
                  placeholder="+ New Check List Item"
                />
                <LiaUserPlusSolid className="text-[25px] text-blue-700" />
              </div>
              <p className="text-red-600">
                {errors.option_text && <span>Check List is required</span>}
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-[25px] font-semibold">Add QC User</h2>

              <select
                {...register("user")}
                className="w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center focus:outline-none px-3 text-[20px] capitalize font-semibold"
              >
                <option value="" hidden selected>
                  Select QC
                </option>
                {allUser?.map((user, i) => (
                  <option key={i} value={user?.user?.id}>
                    {user?.user?.username} {user?.user?.id}
                  </option>
                ))}
              </select>

              <p className="text-red-600">
                {errors.user && <span>User is required</span>}
              </p>
            </div>
          </div>

          {/* Points */}
          <div className="mt-8">
            <h2 className="text-[25px] font-semibold">Points</h2>
            <div className=" w-[140px] h-[45px] rounded-[46px] border border-blue-700 px-1 bg-white">
              <input
                type="number"
                {...register("points", { required: true })}
                className="w-[120px] h-[40px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold bg-white"
                placeholder="+ Points"
              />
              <p className="text-red-600">
                {errors.points && <span>Point is required</span>}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-[25px] font-semibold">Assignee</h2>
            <select
              {...register("assignee")}
              className=" w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold"
            >
              <option value="" hidden selected>
                Select Assignee
              </option>
              {allUser?.map((user, i) => (
                <option key={i} value={user?.user?.id}>
                  {user?.user?.username} {user?.user?.id}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Date and Priority */}
        <section className="mt-[50px] flex justify-between mr-32">
          <div>
            <h2 className="text-[25px] font-semibold">
              Set Due Date and Time.
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-[25px] text-blue-700">
                <CreateDate startDate={startDate} setStartDate={setStartDate} />
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[25px] font-semibold">Task Prio.</h2>
            <div className="flex flex-col items-center gap-2">
              <select
                {...register("priority", { required: true })}
                data-te-select-init
                className=" w-[200px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold"
              >
                <option value="" hidden selected>
                  Select Prio.
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <p className="text-red-600">
                {errors.priority && <span> Priority is required</span>}
              </p>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default CreateTask;
