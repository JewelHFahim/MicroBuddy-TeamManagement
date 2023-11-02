import { useForm } from "react-hook-form";
import {
  useUpdateNoticeMutation,
  useViewNoticeQuery,
} from "../../../redux/features/notice/NoticeApi";
import Title from "../../../utils/Title";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import TextEditor from "../../../components/text-editor/TextEditor";
import {  useEffect, useState } from "react";
import { encode as base64_encode } from "base-64";


const UpdateNotice = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: noticeDetails } = useViewNoticeQuery(id);
  const [updateNotice] = useUpdateNoticeMutation();
  const [content, setContent] = useState("");

  console.log(noticeDetails);

  const onSubmit = (data, event) => {
    event.preventDefault();
    let encoded = base64_encode(content);
    const upData = {...data, content: encoded};
    console.log(upData)
    updateNotice({ data: upData, id });
    toast.success("Updated Notice");
    navigate("/notices");
  };


  const [plainText, setPlainText] = useState("");

  // Function to decode and strip HTML tags
  const decodeAndStripHtmlTags = (base64String) => {
    if (!base64String) {
      return "";
    }
  
    try {
      const decodedContent = atob(base64String);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = decodedContent;
      return tempDiv.textContent || tempDiv.innerText;
    } catch (error) {
      console.error("Error decoding base64:", error);
      return "";
    }
  };

  useEffect(() => {
    const plainTextContent = decodeAndStripHtmlTags(noticeDetails?.content);
    setPlainText(plainTextContent);
  }, []);


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
            <label className="text-[34px] font-semibold ml-2"> Notice Details. </label>

            <TextEditor content={content} setContent={setContent} plainText={plainText} />
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
