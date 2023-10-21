import Title from "../../../utils/Title";
import { BsFlagFill } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const { token } = useSelector((state) => state.user);
  const { id } = useParams();
  const [viewTask, setViewTask] = useState();

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
        setViewTask(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, token]);

  return (
    <div>
      <Title>View Task</Title>

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
              type="text"
              placeholder="Google Drive Link..."
              className="w-full h-[67px] rounded-[15px] px-5 placeholder:text-blue-600 focus:outline-none text-[25px]"
            />
          </div>

          {/* Check List */}
          <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] py-[12px] px-[30px]">
            <h2 className="text-[26px] font-semibold">Check List-(4)</h2>

            <div className="mt-8 flex flex-col gap-[20px]">
              {viewTask?.pairs.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[25px] h-[25px] rounded-full border border-blue-800"></div>
                  <p className="text-[20px] text-black font-semibold">CL. Name {item?.checklist_id}</p>
                  <div className="w-[30px] h-[30px] rounded-full border-2 bg-yellow-300 flex justify-center items-center">{item?.qc_check_id}</div>
                </div>
              ))}
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
          <div className="w-full flex gap-[32px] justify-end">
            <button className="bg-[#216FED] rounded-[43px] uppercase w-[133px]  text-white h-[53px]">
              Pause
            </button>
            <button className="bg-[#216FED] rounded-[43px] uppercase w-[240px]  text-white h-[53px]">
              Mark As Complete
            </button>
          </div>

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
            <button className="w-[388px] h-[53px] rounded-[44px] bg-[#ED2121] text-[20px] text-white font-medium uppercase">
              Delete This Project
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ViewTask;
