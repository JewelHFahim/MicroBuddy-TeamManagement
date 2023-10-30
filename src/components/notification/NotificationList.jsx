/* eslint-disable react/prop-types */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotificationList = ({ isOpen, setIsOpen, allNotification }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-[50%] transform duration-200"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative w-[500px] inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-top transition-all transform bg-white rounded-lg shadow-xl">
              {allNotification?.length <= 0 ? (
                <p>
                  you have no new
                  <span className="font-semibold text-green-800 underline underline-offset-2">
                    Notification
                  </span>
                </p>
              ) : (
                <div className="flex flex-col gap-y-3">
                  {allNotification?.map((notification) => (
                    <div
                      key={notification.id}
                      className="w-full h-[70px] border p-2 rounded-lg shadow-lg hover:scale-[1.01] transform duration-300 flex items-center gap-4"
                    >
                      <AiOutlineInfoCircle className="text-[24px] text-yellow-500" />

                      <Link to="/my-task" className="text-[14px]">
                        <p>you have one new task:</p>
                        <p className="font-semibold text-green-800 underline underline-offset-2">
                          {notification.message}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  onClick={closeModal}
                  className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white bg-blue-400 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2   hover-bg-gray-100 focus:outline-none focus-ring focus-ring-gray-300 focus-ring-opacity-40"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationList;

const notifications = [
  {
    id: 1,
    notifications: "Example1",
  },
  {
    id: 2,
    notifications: "Example2",
  },
  {
    id: 3,
    notifications: "Example3",
  },
];
