import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RadioButtonStyle } from "../../../utils/ClassList";
import CreateDate from "../../../utils/CreateDate";
import { setHours, setMinutes } from "date-fns";

const EditTask = () => {
  const { register, handleSubmit } = useForm();
  const { token } = useSelector((state) => state.user);
  const { id } = useParams();
  const [viewTask, setViewTask] = useState();
  const [changeStatus, setChangeStatus] = useState(false);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );

  
  useEffect(() => {
    fetch(`http://192.168.3.36:8000/task-detail/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setViewTask(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, token]);


  const handleStatus = () => {
    setChangeStatus(!changeStatus)
  }
console.log(changeStatus)
;
  const onSubmit = (data) => {
    console.log({...data, changeStatus, startDate})
  };

  return (
    <div className="pb-[300px]">
      <Title>Edit Task</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Crate Task Btn */}
        <div className="flex items-center gap-6 justify-end">

          <select {...register("status")} className="w-[236px] h-[54px] rounded-[10px] border border-[#216FED] text-[#216FED] text-[22px] font-medium flex items-center justify-center gap-1 uppercase px-5 focus:outline-none">
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
            <h2 className="text-[34px] font-semibold">Check List-(4)</h2>

            <div className="mt-8 flex flex-col gap-[20px] pl-10">
              {viewTask?.pairs.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <button onClick={()=> handleStatus()} ><input  className={RadioButtonStyle} type="checkbox"value=""/></button>
                  <p className="text-[20px] text-black font-semibold">CL. Name {item?.checklist_id}</p>
                  <div className="w-[30px] h-[30px] rounded-full border-2 bg-yellow-300 flex justify-center items-center">{item?.qc_check_id}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
          <h2 className="text-[34px] font-semibold">Points</h2>
          <input {...register("points")} type="number" placeholder="points" className="w-[100px] font-semibold h-[35px] rounded-[46px] border border-[#216FED] px-6 focus:outline-none"/>
          </div>

          {/* Assign */}
          <div className=" pr-12">
            <h2 className="text-[34px] font-semibold">Assign-(2)</h2>
            <div className="mt-8 flex flex-col gap-[20px]">
              {viewTask?.pairs.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] rounded-full border-2 bg-yellow-300"></div>
                  <p className="text-[24px] text-black font-semibold">
                    Jack Sparrow - {item?.checklist_id}
                  </p>
                </div>
              ))}
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
              <p className="text-[25px] text-blue-700"><CreateDate startDate={startDate} setStartDate={setStartDate}/></p>
            </div>
          </div>

          <div>
            <h2 className="text-[34px] font-semibold">Task Prio.</h2>
            <div className="flex items-center gap-2">
            <select {...register("priority")} data-te-select-init className="mt-4 w-[200px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2 text-[20px] capitalize font-semibold">
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
