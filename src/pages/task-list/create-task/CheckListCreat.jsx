import { useForm } from "react-hook-form";
import { LiaUserPlusSolid } from "react-icons/lia";
import { useCreateCheckListMutation } from "../../../redux/features/task/taskApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { addQCChecker } from "../../../redux/features/task/taskSlice";

const CheckListCreat = () => {
    const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { register, handleSubmit } = useForm();
  const [createCheckList] = useCreateCheckListMutation();
  const {data: allUser} = useGetAllUserQuery();
  console.log(allUser)


  const onSubmit = (data) => {
    console.log(data);
    // createCheckList( {data: data.checklist});
    const payload = { checklist: data.checklist }; // Ensure the payload structure matches the reducer
    dispatch(addQCChecker(payload));

    console.log(data)
    toast.success("Check List Created");
    // naviagte("/create-task");
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
            {...register("checklist")}
            className="w-[300px] h-[43px] rounded-[46px] placeholder:text-blue-700 placeholder:font-semibold pl-4 focus:outline-none bg-transparent font-semibold"
            placeholder="+ New Check List Item"
          />
          <LiaUserPlusSolid className="text-[25px] text-blue-700" />
        </div>

        {/* <select {...register("qc_check_id")} data-te-select-init className="mt-10 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2">

          {
            allUser?.map((user, i)=>
                (<option key={i} value={user.user.id}> {user?.user?.username} </option>)
            )
          }
   
        </select> */}

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
