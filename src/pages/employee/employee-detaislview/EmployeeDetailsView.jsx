import { LiaEditSolid } from "react-icons/lia";
import Title from "../../../utils/Title";
import { useGetAllUserQuery, useUserDetailsQuery } from "../../../redux/features/user/userApi";
import { useParams } from "react-router-dom";
import SearchField from "../../../utils/SearchField";
import TaskFilterMenu from "../../../components/task-filter/TaskFilterMenu";
import FilterButton from "../../../utils/FilterButton";
import Statistics from "../../../components/statistics/Statistics";
import QcTodo from "../../task-list/categorry/QcTodo";
import QCProgress from "../../task-list/categorry/QCProgress";
import QCComplete from "../../task-list/categorry/QCComplete";
import { useSelector } from "react-redux";
import Todo from "../../task-list/categorry/Todo";
import InProgress from "../../task-list/categorry/InProgress";
import Pause from "../../task-list/categorry/Pause";
import CheckList from "../../task-list/categorry/CheckList";
import TargetPoint from "../../../components/target-point/TargetPoint";
import { useState } from "react";
import UpdateTargetpoint from "../../../components/target-point/UpdateTargetpoint";
import { useGetAllQCTaskListQuery, useGetAllTaskQuery } from "../../../redux/features/task/taskApi";

const EmployeeDetailsView = () => {

  const { id } = useParams();
  const { type } = useSelector((state) => state.user);
  const { data: userDetails } = useUserDetailsQuery(id);
  const { data: allUser } = useGetAllUserQuery();
  const { data: allQc } = useGetAllQCTaskListQuery();
  const { data: allTask, isLoading } = useGetAllTaskQuery();

  const singleUserTask = allTask?.filter((task) => task.assignee === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };


  //
  const userImages = allQc?.map((qc) => {
    const task = allTask?.find((task) => task.id === qc.task);
    const user = allUser?.find((userEntry) => userEntry.user.id === qc.user);
    if (task && user) {
      return { qcImg: user?.image, qcTask: qc?.task };
    }
    return null;
  });

  const redirect = "view-task";
  const dataFromCenter = {
    redirect: redirect,
    qcImg: userImages,
    allTask: allTask,
    isLoading: isLoading,
  };


  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px] pb-10">
      <Title>My Task </Title>

      {/* Profile Details */}
      <section className="h-[465px] rounded-[46px] bg-[#F2F6FC] flex  justify-between items-center px-[55px]">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[238px] h-[238px] rounded-[15px] overflow-hidden">
              <img src={userDetails?.image} alt="" className="w-full h-full" />
            </div>

            <div className="font-semibold text-[#273240]">
              <h3 className="text-[40px]  uppercase leading-[60px]">
                {userDetails?.user.username}
              </h3>
              <p className="text-[26px] uppercase">{userDetails?.category}</p>
              <p className="border-b border-blue-700 border-dashed pb-1 ">
                Email:
                <span className="text-blue-600 font-normal ml-1">
                  {userDetails?.user.email}
                </span>
              </p>
             
            </div>
          </div>
          <TargetPoint userDetails={userDetails} />
        </div>

        <div>
          <div className="flex items-center justify-center gap-4">
            <button className="w-[170px] h-[56px] rounded-[26px] border-2 border-[#FF8723] flex justify-center items-center uppercase text-[#FF8723] text-[19px] font-semibold ">
              {userDetails?.type}
            </button>

            {type === "superadmin" && (
              <button onClick={openModal}>
                <LiaEditSolid className="text-[61px] text-[#FF8723]" />
              </button>
            )}
          </div>

          <div className="mt-[36px] flex items-center gap-5 text-center">
            <div className="w-[234px] h-[283px] bg-[#307EF3] rounded-[10px] p-[24px] shadow-md">
              <div className="mt-10">
                <h3 className="text-[40px] text-white font-bold">12</h3>
                <p className="mt-5 text-[20px] text-white font-medium uppercase">
                  Over Date
                </p>
              </div>
            </div>

            <div className="w-[234px] h-[283px] bg-[#353F5C] rounded-[10px] p-[24px] shadow-md">
              <div className="mt-10">
                <h3 className="text-[40px] text-white font-bold">52</h3>
                <p className="mt-5 text-[20px] text-white font-medium uppercase">
                  Complete
                </p>
              </div>
            </div>
          </div>
        </div>

        <UpdateTargetpoint
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openModal={openModal}
          userDetails={userDetails}
        />
      </section>

      {/*  <<=== Search & Filter ====>>  */}
      <section className="flex items-center justify-between w-full">
        <SearchField />
        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          <TaskFilterMenu />
          <FilterButton />
        </div>
      </section>

      {/*  <<====== Statistics ======>>  */}
      <Statistics />

      {/*  <<======= QC Todo ========>>  */}
      <QcTodo dataFromCenter={dataFromCenter}/>

      {/*  <<==== QC In PROGRESS =====>> */}
      <QCProgress dataFromCenter={dataFromCenter} />

      {/*  <<===== QC COMPLETE =======>>  */}
      <QCComplete dataFromCenter={dataFromCenter}/>

      {/* ####### NOT FOR SUPERADMIN/ADMIN ######## */}
      <>
        {(type !== "superadmin" || type !== "admin") && (
          <>
            {/*  <<=========== TODO ============>>  */}
            <Todo dataFromCenter={dataFromCenter} singleUserTask={singleUserTask} />

            {/*  <<======== IN PROGRESS ========>>  */}
            <InProgress dataFromCenter={dataFromCenter} singleUserTask={singleUserTask} />

            {/*  <<=========== PAUSE ===========>>  */}
            <Pause dataFromCenter={dataFromCenter} singleUserTask={singleUserTask} />

            {/*  <<===== FOR QC CHECKLIST ======>>  */}

            <CheckList dataFromCenter={dataFromCenter} singleUserTask={singleUserTask} />
          </>
        )}
      </>
    </div>
  );
};

export default EmployeeDetailsView;
