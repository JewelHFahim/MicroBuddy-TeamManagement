/* eslint-disable react/prop-types */
const MemberButtons = ({viewTask, updateTask, id }) => {

    const handleStatusChange = (newStatus) => {
        const data = { status: newStatus };
        console.log({ data, id });
        updateTask({ data, id });
      };
    
    return (
        <>
            {/* For Member Status Update */}
         
            <div className="flex items-center gap-6 justify-end">
              <div className="flex flex-col gap-5">
                <>
                  {viewTask?.status === "todo" && (
                    <button
                      onClick={() => handleStatusChange("inprogress")}
                      className={`${
                        viewTask?.status === "todo"
                          ? "bg-opacity-[100%] "
                          : "bg-opacity-[80%]"
                      } w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                    >
                      Start Work
                    </button>
                  )}
                </>

                <>
                  {viewTask?.status === "inprogress" ||
                  viewTask?.status === "todo" ||
                  viewTask?.status === "pause" ? (
                    <button
                      onClick={() => handleStatusChange("inprogress")}
                      className={`${
                        viewTask?.status === "inprogress"
                          ? "bg-opacity-[100%] "
                          : "bg-opacity-[80%]"
                      } w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                    >
                      In Progress
                    </button>
                  ) : (
                    <button
                      className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                    >
                      In Progress
                    </button>
                  )}
                </>
              </div>

              <>
                {viewTask?.status === "inprogress" ||
                viewTask?.status === "pause" ? (
                  <button
                    onClick={() => handleStatusChange("pause")}
                    className={`${
                      viewTask?.status === "pause"
                        ? "bg-opacity-[100%] "
                        : "bg-opacity-[80%]"
                    } w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                  >
                    Pause
                  </button>
                ) : (
                  <button
                    className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                  >
                    Pause
                  </button>
                )}
              </>

              <>
                {viewTask?.status === "inprogress" ||
                viewTask?.status === "checklist" ? (
                  <button
                    onClick={() => handleStatusChange("checklist")}
                    className={`${
                      viewTask?.status === "checklist"
                        ? "bg-opacity-[100%] "
                        : "bg-opacity-[80%]"
                    } w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
                  >
                    Check List
                  </button>
                ) : (
                  <button
                    className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
                  >
                    Check List
                  </button>
                )}
              </>
            </div>
          
        </>
    );
};

export default MemberButtons;