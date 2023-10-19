import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { LiaUserPlusSolid } from "react-icons/lia";
import { RiFlag2Fill } from "react-icons/ri";
import { RadioButtonStyle, colors } from "../../../utils/ClassList";
import { Link } from "react-router-dom";
import { useGetAllCheckListQuery } from "../../../redux/features/task/taskApi";
import { useSelector } from "react-redux";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useForm } from "react-hook-form";
import CreateDate from "../../../utils/CreateDate";
import { useState } from "react";
import { setHours, setMinutes } from "date-fns";
import { all } from "axios";

const CreateTask = () => {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );

  const { addedQCArray, checkListArray } = useSelector((state) => state.task);
  const { userId } = useSelector((state) => state.user);

  const { data: allUser } = useGetAllUserQuery();
  const { data: allChecklist } = useGetAllCheckListQuery();

  console.log(allChecklist)

  // const matchedCheckListId = allChecklist.filter(check =>)

const newArray = addedQCArray.map((qcItem, index)=> ({...qcItem, ...checkListArray[index]}));

console.log(newArray)


  const onSubmit = (data, event) => {
    event.preventDefault();
    const task = { ...data, startDate, assigner: userId, pairs:{}}
    console.log(task)
  };

  return (
    <div className="pb-[300px]">
      <Title>Create Task</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Crate Task Btn */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-[268px] h-[72px] rounded-[58px] bg-[#216FED] text-[22px] font-medium text-white flex items-center justify-center gap-4"
          >
            <FaClipboardList className="text-[35px]" /> Create Task
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
          <textarea
         {...register("description")}
            cols="177"
            rows="14"
            placeholder="Details"
            className="rounded-[46px] border border-[#216FED] p-6 focus:outline-none"
          ></textarea>
        </div>

        {/* Check List + Assign */}
        <section className="mt-[50px] flex justify-between">
          <div className="">
            <h2 className="text-[34px] font-semibold">Check List</h2>

            <div className="mt-8 flex flex-col gap-[20px]">
              {addQC?.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <input disabled className={RadioButtonStyle} type="checkbox"value=""/>
                  <p className="text-[24px] text-black font-semibold"> {item?.checklist}</p>

                  <div
                    key={i}
                    className={`w-[40px] h-[40px] rounded-full border-2 ${
                      colors[i % colors.length]
                    } flex justify-center items-center capitalize font-semibold text-white drop-shadow text-[20px]`}
                    data-te-toggle="tooltip"
                    title={`${item.selectedUserName}`}
                  >
                    {item.selectedUserName?.charAt(0)}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/create-checklist">
              <button className="text-blue-700 font-semibold hover:underline mt-5">
                + Add Check List
              </button>
            </Link>
          </div>

          <div className="">
            <h2 className="text-[34px] font-semibold">Assignee</h2>

            <select {...register("assignee")} data-te-select-init className="mt-6 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold">
        {allUser?.map((user)=>(
              <option key={user?.user?.id} value="1">{user?.user?.username}</option>

        ))}
            </select>

          </div>
        </section>

        {/* Date and Priority */}
        <section className="mt-[50px] flex justify-between mr-32">
          <div>
            <h2 className="text-[34px] font-semibold">
              Set Due Date and Time.
            </h2>
            
            <div className="flex items-center gap-4">
              <p className="text-[25px] text-blue-700"><CreateDate startDate={startDate} setStartDate={setStartDate}/></p>
            </div>
          </div>
          <div>
            <h2 className="text-[34px] font-semibold">Task Prio.</h2>
            <div className="flex items-center gap-2">

            <select {...register("priority")} data-te-select-init className="mt-6 w-[200px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold">
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

export default CreateTask;
