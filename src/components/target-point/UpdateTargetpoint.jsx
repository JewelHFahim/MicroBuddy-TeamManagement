/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import CreateDate from "../../utils/CreateDate";
import { useState } from "react";
import { setHours, setMinutes } from "date-fns";
import { RiCloseCircleLine } from "react-icons/ri";

const UpdateTargetpoint = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const onSubmit = (data) => {
    console.log({...data, startDate});
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

                <div className="border-b border-blue-700 mt-5 ">
                  <p className=" text-blue-700 ">
                    <CreateDate
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  </p>
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
