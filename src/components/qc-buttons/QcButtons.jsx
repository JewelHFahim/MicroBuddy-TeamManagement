/* eslint-disable react/prop-types */
const QcButtons = ({ viewTask, updateTask, id }) => {
  const handleStatusChange = (newStatus) => {
    const data = { status: newStatus };
    updateTask({ data, id });
  };

  return (
    <>
      {/* For QC Status Update */}

      <div className="flex items-center gap-6 justify-end">
        <div className="flex flex-col gap-5">
          <>
            {viewTask?.status === "checklist" && (
              <button
                onClick={() => handleStatusChange("qc_progress")}
                className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
              >
                Start Work
              </button>
            )}
          </>

          <>
            {viewTask?.status === "checklist" ||
            viewTask?.status === "qc_progress" ? (
              <button
                onClick={() => handleStatusChange("qc_progress")}
                className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
              >
                QC In Progress
              </button>
            ) : (
              <button
                className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
              >
                QC In Progress
              </button>
            )}
          </>
        </div>

        <>
          {viewTask?.status === "inprogress" ||
          viewTask?.status === "qc_progress" ? (
            <button
              onClick={() => handleStatusChange("inprogress")}
              className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
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

        <>
          {viewTask?.status === "qc_progress" ||
          viewTask?.status === "qc_complete" ? (
            <button
              onClick={() => handleStatusChange("qc_complete")}
              className={`w-[200px] h-[53px] rounded-[44px] bg-blue-700 text-[18px] font-medium text-white`}
            >
              QC Complete
            </button>
          ) : (
            <button
              className={`w-[200px] h-[53px] rounded-[44px] bg-slate-600 text-[18px] font-medium text-white`}
            >
              QC Complete
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default QcButtons;
