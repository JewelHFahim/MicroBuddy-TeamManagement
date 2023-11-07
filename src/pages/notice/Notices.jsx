import { FiEye, FiSearch } from "react-icons/fi";
import { BsCalendarFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import "./Notices.css";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";
import {
  useDeleteNoticeMutation,
  useGetAllNoticeQuery,
} from "../../redux/features/notice/NoticeApi";
import notice from "../../assets/notice img.webp";
import DateFormat from "../../utils/DateFormat";
import Loading from "../../utils/loading/Loading";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Notices = () => {
  const { data: allNotices, isLoading } = useGetAllNoticeQuery();
  const [deleteNotice] = useDeleteNoticeMutation();
  const { type } = useSelector((state) => state.user);

  const handleDelete = (id) => {
    deleteNotice(id);
    toast.error("Deleted");
  };

  const decodeBase64 = (base64String) => {
    try {
      return atob(base64String);
    } catch (error) {
      console.error("Error decoding base64:", error);
      return "";
    }
  };

  const renderAsPlainText = (content) => {
    return { __html: content }; // This sets the innerHTML to the decoded content
  };

  return (
    <div className="w-full font-Poppins pl-[33px] pr-[90px]">
      <Title>Notices</Title>

      {/* Search and Filter Btn */}
      <section className="flex items-center justify-between w-full">
        {/* Search Filed */}
        <div className="w-[827px] h-[60px] rounded-[20px] flex justify-between items-center px-[29px] bg-white shadow-md">
          <input
            type="text"
            placeholder="Search Task Here"
            className="w-[780px] h-[58px] rounded-[20px] focus:outline-none text-[#96A0AF] font-semibold"
          />
          <FiSearch className="text-[24px] text-[#216FED]" />
        </div>

        {/* Btn Filter */}
        <div className="flex items-center gap-5">
          {(type === "superadmin" || type === "admin") && (
            <Link to="/create-notice">
              <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
                <p className="text-[18px] font-semibold">+ New Notice</p>
              </button>
            </Link>
          )}

          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <BsCalendarFill className="text-[24px] " />
            <p className="text-[18px] font-semibold">Filter</p>
          </button>
        </div>
      </section>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <section>
          <div className="mt-12">
            {allNotices?.length <= 0 ? (
              <div className="text-[30px] font-semibold text-slate-600 text-center my-20 flex items-center justify-center">
                <p>Notice List Empty</p>
                <img src={notice} alt="" />
              </div>
            ) : (
              <div className="text-[#273240] flex flex-col gap-y-[10px]">
                {allNotices?.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full border flex justify-between items-center bg-white rounded-lg shadow-sm px-4  py-2 notice"
                  >
                    <div className="flex items-center gap-x-3 whitespace-nowrap">
                      <img src={notice} className="w-[81px] h-[81px] rounded-[20px]"/>
                      <div>
                        
                        <p className="text-[24px] font-medium text-[#273240]">
                          {item.title}
                        </p>


                        <div
                          className="text-[13px] text-[#216FED] mt-2 "
                          dangerouslySetInnerHTML={renderAsPlainText(
                            (decodeBase64(item?.content).slice(0,200))
                          )}
                        ></div>


                      </div>
                    </div>

                    <div className="flex items-center gap-10">
                      <div className="text-center">
                        <p className="text-[#737B8B]">Created Date</p>
                        <p className="text-[20px] text-[#216FED]">
                          {DateFormat(item.created_at)}
                        </p>
                      </div>

                      <div className="flex items-center gap-5">
                        <Link to={`/view-notice/${item.id}`}>
                          <button className="text-[30px] text-green-800">
                            <FiEye />
                          </button>
                        </Link>

                        {type === "superadmin" && (
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-[25px] text-red-800 pb-2"
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="my-[52px] flex justify-end">
            <div className="flex items-center gap-x-6">
              <a
                href="#"
                className="flex items-center justify-center w-[137px] h-[56px] mx-1 bg-[#216FED] text-white text-[18px] font-medium rounded-[56px]   "
              >
                Previous
              </a>

              <a href="" className="text-[18px] font-medium text-[#216FED]">
                1
              </a>
              <a
                href=""
                className="text-[18px] font-medium text-[#216FED] border bg-gray-300 p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center"
              >
                2
              </a>
              <a href="" className="text-[18px] font-medium text-[#216FED]">
                3
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-[137px] h-[56px] mx-1 bg-[#216FED] text-white text-[18px] font-medium rounded-[56px]   "
              >
                Next
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Notices;
