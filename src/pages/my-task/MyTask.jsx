import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarFill, BsEye } from "react-icons/bs";
import Title from "../../utils/Title";
import { useSelector } from "react-redux";
import DateFormat from "../../utils/DateFormat";
import { Link } from "react-router-dom";
import { datas, userProPic } from "../../utils/Important";
import Todo from "../task-list/categorry/Todo";
import {
  useGetAllQCTaskListQuery,
  useGetAllTaskQuery,
} from "../../redux/features/task/taskApi";
import StatusTitle from "../../utils/StatusTitle";
import TableHead from "../../utils/TableHead";
import StatusBtnOutLine from "../../utils/StatusBtnOutLine";
import Loading from "../../utils/loading/Loading";
import InProgress from "../task-list/categorry/InProgress";
import Pause from "../task-list/categorry/Pause";
import CheckList from "../task-list/categorry/CheckList";

const MyTask = () => {
  const { userId, type } = useSelector((state) => state.user);
  const { data: allTask, isLoading } = useGetAllTaskQuery();
  const { data: allQCTask } = useGetAllQCTaskListQuery();

  const tasksWithQcUser = allQCTask
    ?.filter((task) => task.user === userId)
    .map((task) => task.task);

  const onlyQCTask = allTask?.filter(
    (task) => tasksWithQcUser?.includes(task.id) && task.status === "checklist"
  );

  const qcCompleteTask = allTask?.filter(
    (task) => task.status === "qc_complete"
  );
  const qcInProgress = allTask?.filter((task) => task.status === "qc_progress");

  const redirect = "update-mytask";

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px] pb-10">
      <Title>My Task </Title>

      {/* Search and Filter Btn */}
      <section className="flex items-center justify-between w-full">
        {/* Search Filed */}
        <div className="w-[827px] h-[60px] rounded-[20px] flex justify-between items-center px-[29px] bg-white shadow-md">
          <input
            type="text"
            placeholder="Search Task Here"
            className="w-[780px] h-[58px] rounded-[20px] focus:outline-none text-[#96A0AF] font-semibold"
          />
          <FiSearch className="text-[24px] text-[#216FED]" />
        </div>

        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          <button className="w-[166px] h-[60px] rounded-[20px] bg-white flex justify-center items-center gap-[36px] shadow-lg">
            <p className="text-[18px] font-semibold text-[#273240]">All</p>
            <IoIosArrowDown className="text-[24px] text-[#216FED]" />
          </button>

          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <BsCalendarFill className="text-[24px] " />
            <p className="text-[18px] font-semibold">Filter</p>
          </button>
        </div>
      </section>

      <section className="mt-[38px] grid grid-cols-4 gap-[45px]">
        {datas.map((item, i) => (
          <div
            key={i}
            className=" w-[331px] h-[126px] rounded-[14px] bg-white shadow-lg flex justify-start items-center px-[30px] py-[24px] gap-[30px]"
          >
            <div
              className={`w-[78px] h-[78px] rounded-[20px] ${item.bg} text-[46px] text-white flex justify-center items-center`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-[36px] font-semibold text-[#273240]">
                {item.total}
              </h3>
              <p className="font-medium text-[#737B8B]">{item.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/*  <<======= AS QC CHECK ========>>  */}

      {onlyQCTask?.length > 0 && (
        <section className="mt-[32px]">
          <StatusTitle className="bg-[#FF8723]">As QC Check</StatusTitle>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[18px] flex flex-col gap-[20px]">
              {onlyQCTask?.map((item, i) => (
                <div key={i}>
                  <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                    <table className="w-full table-auto text-center">
                      <TableHead />
                      <tbody className="text-gray-600">
                        <tr>
                          <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                            <img
                              src={userProPic}
                              className="w-[90px] h-[90px]  rounded-[31px]"
                            />

                            <div className="text-left">
                              <span className="block text-[#216FED] font-[300]">
                                C012345-{item?.id}
                              </span>
                              <span className="block text-[#273240] text-[20px] font-semibold">
                                {item?.task_name}
                              </span>
                              <span className="block text-[#216FED] font-[300]">
                                {DateFormat(item?.start_date)}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                            {DateFormat(item?.start_date)}
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              <div className="w-[35px] h-[35px] rounded-full border-2 shrink-0 bg-red-300 flex justify-center items-center font-semibold">
                                {item?.assignee}
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              {item?.qc_check?.map((item, i) => (
                                <div
                                  key={i}
                                  className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300 flex justify-center items-center"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </td>

                          <td className="text-right px-2 whitespace-nowrap">
                            <div className="flex justify-between items-center px-5 w-full">
                              <StatusBtnOutLine className="text-[#FF8723]">
                                QC Check{" "}
                              </StatusBtnOutLine>
                              <Link to={`/update-mytask/${item?.id}`}>
                                <button className="text-[32px] text-black flex justify-center items-center">
                                  <BsEye />
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/*  <<======= QC In PROGRESS ========>> */}

      {qcInProgress?.length > 0 && (
        <section className="mt-[32px]">
          <StatusTitle className="bg-[#FF8723]">QC In Progress</StatusTitle>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[18px] flex flex-col gap-[20px]">
              {qcInProgress?.map((item, i) => (
                <div key={i}>
                  <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                    <table className="w-full table-auto text-center">
                      <TableHead />
                      <tbody className="text-gray-600">
                        <tr>
                          <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                            <img
                              src={userProPic}
                              className="w-[90px] h-[90px]  rounded-[31px]"
                            />

                            <div className="text-left">
                              <span className="block text-[#216FED] font-[300]">
                                C012345-{item?.id}
                              </span>
                              <span className="block text-[#273240] text-[20px] font-semibold">
                                {item?.task_name}
                              </span>
                              <span className="block text-[#216FED] font-[300]">
                                {DateFormat(item?.start_date)}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                            {DateFormat(item?.start_date)}
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              <div className="w-[35px] h-[35px] rounded-full border-2 shrink-0 bg-red-300 flex justify-center items-center font-semibold">
                                {item?.assignee}
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              {item?.qc_check?.map((item, i) => (
                                <div
                                  key={i}
                                  className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300 flex justify-center items-center"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </td>

                          <td className="text-right px-2 whitespace-nowrap">
                            <div className="flex justify-between items-center px-5 w-full">
                              <StatusBtnOutLine className="text-[#FF8723]">
                                QC Check{" "}
                              </StatusBtnOutLine>
                              <Link to={`/update-mytask/${item?.id}`}>
                                <button className="text-[32px] text-black flex justify-center items-center">
                                  <BsEye />
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/*  <<======= QC COMPLETE ========>>  */}

      {qcCompleteTask?.length > 0 && (
        <section className="mt-[32px]">
          <StatusTitle className="bg-[#FF8723]">QC COMPLETE</StatusTitle>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-[18px] flex flex-col gap-[20px]">
              {qcCompleteTask?.map((item, i) => (
                <div key={i}>
                  <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                    <table className="w-full table-auto text-center">
                      <TableHead />
                      <tbody className="text-gray-600">
                        <tr>
                          <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap">
                            <img
                              src={userProPic}
                              className="w-[90px] h-[90px]  rounded-[31px]"
                            />

                            <div className="text-left">
                              <span className="block text-[#216FED] font-[300]">
                                C012345-{item?.id}
                              </span>
                              <span className="block text-[#273240] text-[20px] font-semibold">
                                {item?.task_name}
                              </span>
                              <span className="block text-[#216FED] font-[300]">
                                {DateFormat(item?.start_date)}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                            {DateFormat(item?.start_date)}
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              <div className="w-[35px] h-[35px] rounded-full border-2 shrink-0 bg-red-300 flex justify-center items-center font-semibold">
                                {item?.assignee}
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center">
                              {item?.qc_check?.map((item, i) => (
                                <div
                                  key={i}
                                  className="w-[35px] h-[35px] -mx-1 rounded-full border-2  shrink-0 bg-green-300 flex justify-center items-center"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </td>

                          <td className="text-right px-2 whitespace-nowrap">
                            <div className="flex justify-between items-center px-5 w-full">
                              <StatusBtnOutLine className="text-[#FF8723]">
                                QC COMPLETE
                              </StatusBtnOutLine>
                              <Link to={`/update-mytask/${item?.id}`}>
                                <button className="text-[32px] text-black flex justify-center items-center">
                                  <BsEye />
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ####### NOT FOR SUPERADMIN/ADMIN ######## */}
      <>
        {type !== "superadmin" && (
          <>
            {/*  <<=========== TODO ============>>  */}
            <Todo redirect={redirect} />

            {/*  <<======== IN PROGRESS ========>>  */}
            <InProgress redirect={redirect} />

            {/*  <<=========== PAUSE ===========>>  */}
            <Pause redirect={redirect} />

            {/*  <<===== FOR QC CHECKLIST ======>>  */}
            <CheckList redirect={redirect} />
          </>
        )}
      </>
    </div>
  );
};

export default MyTask;
