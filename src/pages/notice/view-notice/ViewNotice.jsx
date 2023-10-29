import { Link, useParams } from "react-router-dom";
import { useViewNoticeQuery } from "../../../redux/features/notice/NoticeApi";
import Title from "../../../utils/Title";
import { TbEdit } from "react-icons/tb";
import DateFormat from "../../../utils/DateFormat";
import Loading from "../../../utils/loading/Loading";
import { useSelector } from "react-redux";

const ViewNotice = () => {
  const { id } = useParams();
  const { type } = useSelector((state) => state.user);
  const { data: noticeDetails, isLoading } = useViewNoticeQuery(id);

  return (
    <div>
      <Title>View Notice</Title>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <section className="w-full h-[457px] rounded-[46px] shadow-md border border-blue-700 p-10 flex justify-between items-start">
          <div className="w-[95%]">
            <h1 className="text-[80px] font-semibold text-secondary">
              {noticeDetails?.title}
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] rounded-full bg-yellow-200 border-2 border-white"></div>
                <p className="text-black font-semibold">
                  Author{noticeDetails?.author}
                </p>
              </div>
              <span className="text-blue-700 text-xl">* </span>
              <p>{DateFormat(noticeDetails?.created_at)}</p>
            </div>

            <p className="text-[20px] text-blue-700 mt-10 w-[70%]">
              {noticeDetails?.content}
            </p>
          </div>

          {type === "superadmin" && (
            <Link to={`/notice-update/${noticeDetails.id}`}>
              <button className="text-[45px]">
                <TbEdit />
              </button>
            </Link>
          )}
        </section>
      )}
    </div>
  );
};

export default ViewNotice;
