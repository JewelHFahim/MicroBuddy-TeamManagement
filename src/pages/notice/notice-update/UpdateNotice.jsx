import { useForm } from "react-hook-form";
import { useUpdateNoticeMutation, useViewNoticeQuery } from "../../../redux/features/notice/NoticeApi";
import Title from "../../../utils/Title";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateNotice = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: noticeDetails } = useViewNoticeQuery(id);
  const [updateNotice] = useUpdateNoticeMutation();

  console.log(noticeDetails);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    updateNotice({data, id})
    toast.success("Updated Notice");
    navigate("/notices")
  };

  return (
    <div className="">
      <Title>Update Notice</Title>

      <section className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-[34px] font-semibold ml-2">
              Notice Title:
            </label>
            <input
              type="text"
              defaultValue={noticeDetails?.title}
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
              defaultValue={noticeDetails.content}
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

export default UpdateNotice;
