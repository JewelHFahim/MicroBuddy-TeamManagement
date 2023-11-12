import { Link, useParams } from "react-router-dom";
import { useViewNoticeQuery } from "../../../redux/features/notice/NoticeApi";
import Title from "../../../utils/Title";
import { TbEdit } from "react-icons/tb";
import DateFormat from "../../../utils/DateFormat";
import Loading from "../../../utils/loading/Loading";
import { useSelector } from "react-redux";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";

const ViewNotice = () => {
  const { id } = useParams();
  const { type, userId } = useSelector((state) => state.user);
  const { data: noticeDetails, isLoading } = useViewNoticeQuery(id);
  const { data: allUser } = useGetAllUserQuery();

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
    <div>
      <Title>View Notice</Title>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <section className="w-full h-[550px] overflow-hidden rounded-[46px] shadow-md border border-blue-700 p-10 flex justify-between items-start">
          <div className="w-[1300px] h-[500px] overflow-x-auto">
            <h1 className="text-[80px] font-semibold text-secondary leading-[100px]">
              {noticeDetails?.title}
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] rounded-full bg-yellow-200 border-2 border-white">
                  {allUser
                    ?.filter((userImg) => {
                      return (
                        userImg?.user?.id === noticeDetails.author &&
                        userImg.image
                      );
                    })
                    .map((filteredUserImg, index) => (
                      <img
                        key={index}
                        src={filteredUserImg.image}
                        alt="author"
                        className="w-full h-full rounded-full"
                      />
                    ))}
                </div>

                <div className="text-black font-semibold">
                  {allUser
                    ?.filter((userName) => {
                      return userName?.user?.id === noticeDetails.author;
                    })
                    .map((filtereduserName, index) => (
                      <p key={index}>{filtereduserName.user?.username}</p>
                    ))}
                </div>
              </div>
              <span className="text-blue-700 text-xl">* </span>
              <p>{DateFormat(noticeDetails?.created_at)}</p>
            </div>

            <div
              className="text-[20px] mt-10 w-[85%]"
              dangerouslySetInnerHTML={renderAsPlainText(
                decodeBase64(noticeDetails?.content)
              )}
            ></div>
          </div>

          {(type === "superadmin" || noticeDetails?.author === userId) && (
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
