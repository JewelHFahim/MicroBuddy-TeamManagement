import { useForm } from "react-hook-form";
import { LiaUserPlusSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addUser,
  createCheckList,
} from "../../../redux/features/task/taskSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import axios from "axios";

const CheckListCreat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data: allUser } = useGetAllUserQuery();
  const [selectedUserName, setSelectedUserName] = useState("");
  const { token } = useSelector((state) => state.user);
  const handleSelectChange = (event) => {
    setSelectedUserName(event.target.options[event.target.selectedIndex].text);
  };

  const baseurl = "https://jabedahmed.pythonanywhere.com/";
  const headers = {
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  }

  const onSubmit = async (data) => {
    try {

      const optionData = data.option_text;

      const taskResponse = await axios.post( `${baseurl}/task-create/`, optionData, headers);
      const taskId = taskResponse.data.id;



    } catch (error) {
      // handle error
    }
    console.log(data);
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
          {...register("user")}
          className="mt-10 w-[358px] h-[45px] rounded-[46px] border border-blue-700 flex justify-between items-center pr-4 focus:outline-none px-2"
          onChange={handleSelectChange}
        >
          {allUser?.map((user) => (
            <option key={user?.user?.id} value={user?.user?.id}>
              {user?.user?.username}
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
