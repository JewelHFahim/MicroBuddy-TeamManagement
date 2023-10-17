import { useForm } from "react-hook-form";
import { useCreateNoticeMutation } from "../../../redux/features/notice/NoticeApi";
import Title from "../../../utils/Title";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateNotice = () => {
  const { register, handleSubmit } = useForm();
  const [createNotice] = useCreateNoticeMutation();
  const { userId } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const notice = { ...data, author: userId };
    console.log(notice);
    createNotice(notice);
    toast.success("Created Notice");
    navigate("/notices")
  };

  return (
    <div className="">
      <Title>Create Notice</Title>

      <section className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-[34px] font-semibold ml-2">
              Notice Title:
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Title Here"
              className="w-full h-[66px] rounded-[46px] border border-blue-700 bg-white focus:outline-none px-5 text-[20px] font-medium"
            />
          </div>

          <div className="mt-5">
            <label className="text-[34px] font-semibold ml-2">
              Notice Details.
            </label>
            <input
              type="text"
              {...register("content")}
              placeholder="Title Here"
              className="w-full h-[375px] rounded-[46px] border border-blue-700 bg-white focus:outline-none px-5 text-[20px] font-medium"
            />
          </div>

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className=" bg-blue-700 text-white px-16 py-4 rounded-[40px] text-[20px] font-semibold uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateNotice;
