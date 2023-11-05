/* eslint-disable react/prop-types */
import { BsFlagFill } from "react-icons/bs";
import DateFormat from "../../utils/DateFormat";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

const InfoHeader = ({ viewTask, allUser }) => {
  const { type } = useSelector((state) => state.user);

  const assigneeName = allUser?.find((user) => {
    if (user.user.id === viewTask?.assignee) {
      return user;
    }
  });

  return (
    <section className="w-full h-[97px] rounded-[15px] bg-[#F2F6FC] flex gap-4 justify-between items-center px-4">
      <div>
        <p className="text-[#737B8B] uppercase">Created</p>
        <p className="text-[#216FED] font-medium">
          {DateFormat(viewTask?.start_date)}
        </p>
      </div>

      <div>
        <p className="text-[#737B8B] uppercase">Due Date</p>
        <p className="text-red-500 font-medium">
          {DateFormat(viewTask?.due_date)}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#737B8B] uppercase">Assigned</p>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] bg-green-300 rounded-full border-2 border-white ml-[-10px]"></div>

          <p className="text-[20px] text-black font-medium  capitalize">
            {assigneeName?.user?.username}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#737B8B] uppercase">Priority</p>

        {viewTask?.priority === "low" ? (
          <div className="w-[50px] h-[50px] rounded-full border-2 ml-[-10px] border-dashed border-green-400 flex justify-center items-center">
            <BsFlagFill className="text-[25px] text-green-400" />
          </div>
        ) : viewTask?.priority === "medium" ? (
          <div className="w-[50px] h-[50px] rounded-full border-2 ml-[-10px] border-dashed border-yellow-400 flex justify-center items-center">
            <BsFlagFill className="text-[25px] text-yellow-400" />
          </div>
        ) : (
          <div className="w-[50px] h-[50px] rounded-full border-2 ml-[-10px] border-dashed border-red-400 flex justify-center items-center">
            <BsFlagFill className="text-[25px] text-red-400" />
          </div>
        )}
      </div>

      <div className="w-[227px] h-[54px] rounded-[10px] border border-blue-600 flex justify-center items-center">
        <p className="text-[23px] uppercase font-medium text-blue-600 ">
          Task Point - {viewTask?.points}
        </p>
      </div>

      <>
        <div className="flex items-center gap-4">
          <div className="w-[227px] h-[54px] rounded-[10px] border border-blue-600 flex justify-center items-center">
            <p className="text-[23px] uppercase font-medium text-blue-600 ">
              {viewTask?.status}
            </p>
          </div>

          {type === "superadmin" && (
            <div className="mx-4">
              <Link to={`/edit-task/${viewTask?.id}`}>
                <button>
                  <FiEdit className="text-[45px]" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </section>
  );
};

export default InfoHeader;
