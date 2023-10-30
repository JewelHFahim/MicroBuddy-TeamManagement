import Title from "../../../utils/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useGetAllCheckListQuery,
  useGetQCStatusByQcIdQuery,
  useGetTaskListByQcIdQuery,
  useUpdateQCUserStatusMutation,
  useUpdateTaskMutation,
  useViewTaskQuery,
} from "../../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useSelector } from "react-redux";
import InfoHeader from "../../../components/info-header/InfoHeader";
import Activity from "../../../components/activity/Activity";
import Chatting from "../../../components/chatting/Chatting";
import QcButtons from "../../../components/qc-buttons/QcButtons";
import MemberButtons from "../../../components/member-btns/MemberButtons";

const UpdateMyTask = () => {
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { data: QCListBytaskId } = useGetTaskListByQcIdQuery(id);
  const { data: viewTask } = useViewTaskQuery(id);
  const { data: allOptions } = useGetAllCheckListQuery();
  const [qcId, setQcId] = useState();
  const { data: qcStatusList } = useGetQCStatusByQcIdQuery(qcId);
  const [updateTask] = useUpdateTaskMutation();
  const { data: allUser } = useGetAllUserQuery();
  const { userId, type } = useSelector((state) => state.user);
  const [updateQCUserStatus] = useUpdateQCUserStatusMutation();

  useEffect(() => {
    const isChekedStatus = QCListBytaskId?.map((ck) => setQcId(ck.id));
    console.log(isChekedStatus);
  }, [QCListBytaskId]);

  const [qsState, setQcState] = useState();
  useEffect(() => {
    setQcState(viewTask?.assignee !== userId && viewTask?.assigner !== userId);
  }, [viewTask, userId]);

  const [checkStatu, setCheckStatus] = useState(false);
  console.log(checkStatu);
  const handleCheckStatus = () => {
    setCheckStatus(!checkStatu);
    const is_checked = { is_checked: checkStatu };
    updateQCUserStatus({ data: is_checked, qcId });
  };

  // ============================>> UPDATE FORM <<========================
  const onSubmitLink = (data, event) => {
    event.preventDefault();
    const form = event.target;
    updateTask({ data, id });
    toast.success("Task Location Submitted");
    form.reset();
  };

  return (
    <div className="pb-[300px]">
      <Title>Update MyTask</Title>

      <InfoHeader viewTask={viewTask} allUser={allUser} />

      <section className="flex justify-between gap-[40px] mt-5">
        <section className="w-[50%]">
          {/* title and description */}
          <div className="mt-5 w-[712px] h-[780px] overflow-y-auto bg-[#F2F6FC] border border-blue-700 rounded-[15px] shadow-md p-[40px] text-[#273240]">
            <h1 className="text-[34px] font-semibold">{viewTask?.task_name}</h1>
            <p className="text-[25px] font-light">{viewTask?.description}</p>
          </div>

          {/* Task Submit */}
          <div className="mt-[27px] w-[712px] h-[187px] rounded-[15px] bg-[#F2F6FC] p-[30px]">
            <h2 className="text-[34px] text-secondary font-semibold">
              Task File Location.
            </h2>

            <form
              onSubmit={handleSubmit(onSubmitLink)}
              className="w-full h-[67px] rounded-[15px] flex items-center"
            >
              <input
                disabled={qsState}
                {...register("task_submit")}
                defaultValue={viewTask?.task_submit}
                type="text"
                placeholder="Task File Link...."
                className="w-[75%] h-full px-5 placeholder:text-blue-600 placeholder:text-opacity-[50%] focus:outline-none text-[25px] rounded-s-[15px] border cursor-text"
              />

              <button
                disabled={qsState}
                type="submit"
                className="w-[25%] h-full border bg-blue-400 hover:bg-blue-300 rounded-e-[15px] text-[22px] font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Check List + Assign */}
          <section className="mt-[27px] w-full rounded-[15px] bg-[#F2F6FC] p-[30px]">
            {/* Check List */}
            <h2 className="text-[30px] font-semibold">Check List</h2>
            <div className="flex items-center gap-5">
              {/* Radio Button */}
              <div>
                {qcStatusList?.map((st) => (
                  <div key={st.id}>
                    <button
                      disabled={!qsState && !type === "superadmin"}
                      onClick={handleCheckStatus}
                      className="w-[25px] h-[25px] rounded-full border-2 border-blue-700 flex justify-center items-center"
                    >
                      <div
                        className={`w-[15px] h-[15px] rounded-full ${
                          st.is_checked === true
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
              <div className="flex flex-col gap-2">
                {QCListBytaskId?.map((qc) => {
                  const user = allUser?.find(
                    (user) => user.user.id === qc.user
                  );
                  if (user) {
                    return (
                      <p
                        key={user.id}
                        className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-[25px] bg-green-200 border-[4px] border-green-300"
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
          </section>

          {/*Activity*/}
          <Activity />
        </section>

        {/***************************** * SECOND COLUMN *******************************/}
        <section className="w-[50%]">
          {/* For Member Status Update */}
          <MemberButtons viewTask={viewTask} updateTask={updateTask} id={id} />

          {/* For QC Status Update */}
          <QcButtons viewTask={viewTask} updateTask={updateTask} id={id} />

          {/* Chatting */}
          <Chatting />
        </section>
      </section>
    </div>
  );
};

export default UpdateMyTask;
