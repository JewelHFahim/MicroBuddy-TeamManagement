/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiCloseCircleLine } from "react-icons/ri";
import { useChangePasswordMutation } from "../../redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { addLogout } from "../../redux/features/user/userSlice";
const ChangePassword = ({passOpen, setPassopen}) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [changePassword] = useChangePasswordMutation();

  const closeModal = () => {
    setPassopen(false);
  };

  const onSubmit = (data, e) => {
    const clearForm = e.target;
    changePassword(data);
    console.log(data)
    clearForm.reset();
    toast.success("Updated");
    dispatch(addLogout())
  };

  return (
    <div className="relative flex justify-center">
      {passOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-[50%] transform duration-200">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative w-[350px] overflow-y-auto inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-center transition-all transform bg-white rounded-lg shadow-xl">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-[30px] hover:text-red-400"
                >
                  <RiCloseCircleLine />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="">

                <div className="flex flex-col gap-2">
                  <label htmlFor="Target Point text-[20px]">Old Password</label>
                  <input
                  {...register("old_password")}
                    type="number"
                    placeholder="Old Password"
                    className="border border-blue-500 h-[40px] rounded-md focus:outline-blue-600 px-4"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="Target Point text-[20px]">New Password</label>
                  <input
                  {...register("new_password")}
                    type="number"
                    placeholder="New Password"
                    className="border border-blue-500 h-[40px] rounded-md focus:outline-blue-600 px-4"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="border px-5 py-1 font-medium bg-blue-500 text-white rounded-md mt-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
