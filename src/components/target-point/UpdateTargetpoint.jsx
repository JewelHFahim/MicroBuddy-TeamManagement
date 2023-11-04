/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { RiCloseCircleLine } from "react-icons/ri";
import { useUpdateTargetpointMutation, useViewDetailTargetpointQuery } from "../../redux/features/user/userApi";
import toast from "react-hot-toast";

const UpdateTargetpoint = ({ isOpen, setIsOpen, userDetails }) => {
  const { register, handleSubmit } = useForm();


  const [updateTargetpoint] = useUpdateTargetpointMutation();
  const {data: targetPointDetail } = useViewDetailTargetpointQuery(userDetails?.user?.id);
  const id = targetPointDetail?.[0]?.id


  const onSubmit = (data, e) => {
    const clearForm = e.target;
    updateTargetpoint({data, id});
    clearForm.reset();
    toast.success("Updated")
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-center">
      {isOpen && (
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
                  <label htmlFor="Target Point text-[20px]">Target Point</label>
                  <input
                  {...register("target")}
                    type="number"
                    placeholder="Target Point"
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

export default UpdateTargetpoint;
