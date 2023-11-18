import Title from "../../../utils/Title";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useDeleteTaskMutation,
  useGetAllCheckListQuery,
  useGetTaskListByQcIdQuery,
  useGetQCStatusByQcIdQuery,
  useViewTaskQuery,
  useUpdateTaskMutation,
} from "../../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoHeader from "../../../components/info-header/InfoHeader";
import Chatting from "../../../components/chatting/Chatting";
import Activity from "../../../components/activity/Activity";
import QcButtons from "../../../components/qc-buttons/QcButtons";

const ViewTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qcId, setQcId] = useState();
  const { data: viewTask } = useViewTaskQuery(id);
  const { data: allUser } = useGetAllUserQuery();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const { data: allOptions } = useGetAllCheckListQuery();
  const { data: QCListBytaskId } = useGetTaskListByQcIdQuery(id);
  const { data: qcStatusList } = useGetQCStatusByQcIdQuery(qcId);
  const { type, userId } = useSelector((state) => state.user);
  const { data: qcObject } = useGetTaskListByQcIdQuery(id);

  useEffect(() => {
    const isChekedStatus = QCListBytaskId?.map((ck) => setQcId(ck.id));
    console.log(isChekedStatus);
  }, [QCListBytaskId]);

  const hnadleTaskDelete = (taskid) => {
    deleteTask(taskid);
    toast.error("Deleted");
    navigate("/task-list");
  };

  const decodeBase64 = (base64String) => {
    try {
      return atob(base64String);
    } catch (error) {
      console.error("Error decoding base64:", error);
      return "";
    }
  };

  const renderAsPlainText = (content) => {
    return { __html: content }; // This sets the innerHTML to the decoded content
  };

  const handleStatusChange = (newStatus) => {
    const data = { status: newStatus };
    updateTask({ data, id });
  };

  return (
    <div>
      <Title>View Task</Title>

      <InfoHeader viewTask={viewTask} allUser={allUser} />

      <section className="mt-[27px] flex gap-[40px]">
        {/* 1st column */}
        <section>
          <div className="w-[712px] h-[780px] overflow-y-auto rounded-[15px] bg-[#F2F6FC] p-[40px]  shadow-md">
            <h2 className="text-[34px] text-secondary font-semibold">
              {viewTask?.task_name}
            </h2>
            <hr />
            <p
              className="text-[25px] font-[300] mt-8"
              dangerouslySetInnerHTML={renderAsPlainText(
                decodeBase64(viewTask?.description)
              )}
            ></p>
          </div>

          {/* Task File */}
          <div className="mt-[27px] w-[712px] h-[187px] rounded-[15px] bg-[#F2F6FC] p-[30px]">
            <h2 className="text-[34px] text-secondary font-semibold">
              Task File Location.
            </h2>
            <input
              disabled
              defaultValue={viewTask?.task_submit}
              type="text"
              placeholder="Task Submit . . ."
              className="w-full h-[70px] rounded-[15px] px-5 placeholder:text-blue-600 placeholder:text-opacity-[50%] focus:outline-none text-[25px] border overflow-x-auto cursor-text"
            />
          </div>

          {/* Check List */}
          <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] py-[12px] px-[30px]">
            <h2 className="text-[26px] font-semibold">Check List</h2>

            <div className="flex items-center gap-5">
              {/* Radio Button */}
              <div>
                {qcStatusList?.map((st) => (
                  <div key={st.id}>
                    <button
                      disabled
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
              <div className="flex flex-col gap-2 w-[40px] h-[40px] rounded-full">
                {QCListBytaskId?.map((qc) => {
                  const user = allUser?.find(
                    (user) => user.user.id === qc.user
                  );
                  if (user) {
                    return (
                      <img
                        title={`${user.user.username}`}
                        key={qc.id}
                        src={user?.image}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    );
                  } else {
                    <p>User with userId not found</p>;
                  }
                })}
              </div>
            </div>
          </div>

          {/* Activity */}
          <Activity id={id} allUser={allUser} />
        </section>

        {/* 2nd column */}
        <section className=" w-full">
          {(type === "superadmin" &&  viewTask?.status !== "done") && (
            <div className="w-full flex justify-center">
              <button
              onClick={() => handleStatusChange("done")}
              className={`w-[250px] h-[50px] rounded-[44px] bg-blue-600 hover:bg-blue-700 text-[18px] font-medium text-white`}
            >
              Mark As Done
            </button>
            </div>
          )}

          {/* For QC Status Update */}
          {qcObject?.[0]?.task === id &&
            qcObject?.[0]?.user !== viewTask.assigner &&
            qcObject?.[0]?.user !== viewTask.assignee && (
              <QcButtons
                viewTask={viewTask}
                type={type}
                updateTask={updateTask}
                id={id}
              />
            )}

          {/* Chating UI */}
          <Chatting />

          {viewTask?.status !== "done" && (
            <>
              {(type === "superadmin" || viewTask?.assigner === userId) && (
                <div className="mt-[50px] flex justify-end ">
                  <button
                    onClick={() => hnadleTaskDelete(id)}
                    className="w-[388px] h-[53px] rounded-[44px] bg-[#ED2121] text-[20px] text-white font-medium uppercase"
                  >
                    Delete This Project
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </section>
    </div>
  );
};

export default ViewTask;
