import { useForm } from "react-hook-form";
import { LiaUserPlusSolid } from "react-icons/lia";
import {
  useCreateCheckListMutation,
  useGetAllQCUserQuery,
} from "../../../redux/features/task/taskApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { addQCChecker } from "../../../redux/features/task/taskSlice";
import { useState } from "react";
import {
  addUser,
  createCheckList,
} from "../../../redux/features/task/taskSlice";
// import { createCheckListVSB } from "../../../redux/features/task/taskSlice";

const CheckListCreat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data: allUser } = useGetAllQCUserQuery();
  // const [createCheckList] = useCreateCheckListMutation();

  const [selectedUserName, setSelectedUserName] = useState("");
  const handleSelectChange = (event) => {
    setSelectedUserName(event.target.options[event.target.selectedIndex].text);
  };

  const onSubmit = async (data) => {

    const neewInfo = {
      userId: data.qc_check_id,
      userName: selectedUserName,
    };
    dispatch(addUser(neewInfo));
    dispatch(createCheckList({ option_text: data.option_text }));

    // createCheckList( {option_text: data.checklist});

    // dispatch(addQCChecker(newData));

    // toast.success("Check List Created");
    // navigate("/create-task");
  };

  return (
    <div className="h-[800px] flex justify-center items-center bg-black bg-opacity-[8%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  items-center border w-[450px] h-[500px] shadow-2xl bg-white rounded-2xl p-6"
      >
        <h1 className="mb-10 text-[20px] underline underline-offset-4">
          New Check List
        </h1>

        <div className="mt-10 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4">
          <input
            type="text"
            {...register("option_text")}
            className="w-[300px] h-[43px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold"
            placeholder="+ New Check List Item"
          />
          <LiaUserPlusSolid className="text-[25px] text-blue-700" />
        </div>

        <select
          {...register("qc_check_id")}
          data-te-select-init
          className="mt-10 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2"
          onChange={handleSelectChange}
        >
          {allUser?.map((user) => (
            <option key={user?.id} value={user?.id}>
              {user?.username}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="border border-blue-700 text-[20px] font-semibold uppercase px-10 py-2 rounded-lg mt-10 text-blue-700 hover:bg-blue-700 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckListCreat;
