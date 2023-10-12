import Title from "../../../utils/Title";
import { FaClipboardList } from "react-icons/fa";
import { LiaUserPlusSolid } from "react-icons/lia";
import { RiFlag2Fill } from "react-icons/ri";

const CreateTask = () => {

  return (
    <div className="pb-[300px]">
      <Title>Create Task</Title>

      <form>
        {/* Crate Task Btn */}
        <div className="flex justify-end">
          <button className="w-[268px] h-[72px] rounded-[58px] bg-[#216FED] text-[22px] font-medium text-white flex items-center justify-center gap-4">
            <FaClipboardList className="text-[35px]" /> Create Task
          </button>
        </div>

        {/* Task Title Input */}
        <div>
          <label className="text-[34px] font-semibold text-secondary pl-2">
            Task Title
          </label>
          <input
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
            name=""
            id=""
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

            <div className="mt-8 flex flex-col gap-[20px]">
              {Array.from({ length: 4 }).map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[30px] h-[30px] rounded-full border border-blue-800"></div>
                  <p className="text-[24px] text-black font-semibold">Text</p>
                  <div className="w-[40px] h-[40px] rounded-full border-2 bg-yellow-300"></div>
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-dashed  border-blue-800 border-doted text-right text-xl relative">
                    <p className="absolute -right-1 -top-1 bg-blue-800 w-[20px] h-[20px] flex justify-center items-center rounded-full text-white">
                      +
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4">
              <input
                type="text"
                className="w-[300px] h-[43px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold"
                placeholder="+ New Check List Item"
              />
              <LiaUserPlusSolid className="text-[25px] text-blue-700" />
            </div>
          </div>
          {/* Assign */}
          <div className="">
            <h2 className="text-[34px] font-semibold">Assign-(2)</h2>

            <div className="mt-8 flex flex-col gap-[20px]">
              {Array.from({ length: 2 }).map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] rounded-full border-2 bg-yellow-300"></div>
                  <p className="text-[24px] text-black font-semibold">
                    Jack Sparrow
                  </p>
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-dashed  border-blue-800 border-doted text-right text-xl relative">
                    <p className="absolute -right-1 -top-1 bg-blue-800 w-[20px] h-[20px] flex justify-center items-center rounded-full text-white">
                      +
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4">
              <input
                type="text"
                className="w-[300px] h-[43px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold"
                placeholder="+ Add New Member"
              />
              <LiaUserPlusSolid className="text-[25px] text-blue-700" />
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
              <div className="w-[30px] h-[30px] rounded-full border border-blue-700"></div>
              <p className="text-[25px] text-blue-700">12/10/23 - 3.56</p>
            </div>
          </div>
          <div>
            <h2 className="text-[34px] font-semibold">Task Prio.</h2>
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-full border border-blue-700"></div>
              <div className="w-[180px] h-[30px] bg-white text-2xl text-yellow-200 flex  items-center px-2">
                <RiFlag2Fill />
              </div>
            </div>
          </div>
        </section>

      </form>

    </div>
  );
};

export default CreateTask;
