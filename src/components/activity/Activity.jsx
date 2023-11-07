/* eslint-disable react/prop-types */
import { useActivityListQuery } from "../../redux/features/activity/activitySlice";
import DateFormat from "../../utils/DateFormat";

const Activity = ({ id, allUser }) => {
  const { data: activityList } = useActivityListQuery(id);
  console.log(activityList);

  return (
    <section>
      <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] w-[712px] h-[666px] p-[40px]">
        <h2 className="text-secondary text-[20px] font-semibold">Activity</h2>

        <div className="">
          {activityList?.map((acitivity) => (
            <div
              key={acitivity.id}
              className="mt-[40px] flex items-start gap-4"
            >
              <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-yellow-300">
                {allUser
                  ?.filter((user) => {
                    return user?.user?.id === acitivity?.user;
                  })
                  .map((filteredUser, index) => (
                    <img
                      key={index}
                      src={filteredUser?.image}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  ))}
              </div>
              <div className="flex flex-col">
                <p className="text-secondary text-[18px]">
                  {allUser
                    ?.filter((user) => {
                      return user?.user?.id === acitivity?.user;
                    })
                    .map((filteredUser, index) => (
                      <span key={index}>{filteredUser?.user?.username}</span>
                    ))}
                </p>

                <p className="text-[12px] text-[#7C8DB5]">
                  {DateFormat(acitivity?.created_at)}
                </p>
                <div className="mt-5">
                  <p className="font-semibold flex gap-2">
                    Status:
                    <span className="uppercase text-green-700">
                      {acitivity?.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activity;
