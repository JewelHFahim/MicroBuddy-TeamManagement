/* eslint-disable react/prop-types */
import StatusTitle from "../../../utils/StatusTitle";
import TableHead from "../../../utils/TableHead";
import { userProPic } from "../../../utils/Important";
import StatusBtnOutLine from "../../../utils/StatusBtnOutLine";
import { Link } from "react-router-dom";
import DateFormat from "../../../utils/DateFormat";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { useState } from "react";
import { useEffect } from "react";
import { getRandomColor } from "../../../utils/getRandomColor";

const Card = ({ cardData, dataSet }) => {
  const { data: allUser } = useGetAllUserQuery();
  
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  return (
    <>
      <section className="mt-[32px]">
        <StatusTitle className={`${dataSet.bgColor}`}>
          {dataSet.btnText}
        </StatusTitle>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {cardData?.map((item, i) => (
            <div key={i}>
              <div className="w-full h-[134px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center">
                  <TableHead />

                  <tbody className="text-gray-600">
                    <tr>
                      <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap max-w-[700px] ">
                        <img
                          src={item?.image !== null ? item?.image : userProPic}
                          className="w-[90px] h-[90px]  rounded-[31px]"
                        />

                        <div className="text-left">
                          <span className="block text-[#216FED] font-[500]">
                            #TASKID-{item?.id}
                            {dataSet?.fn?.getUserImage(item?.assigner)}
                          </span>
                          <span className="block text-[#273240] text-[20px] font-semibold">
                            {item?.task_name.slice(0, 40)} ...
                          </span>
                          <span className="block text-[#216FED] font-[300]">
                            {DateFormat(item?.start_date)}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300] ">
                        {DateFormat(item?.due_date)}
                      </td>

                      <td className="px-6 py-4 ">
                        <div className="flex justify-center items-center">
                          <div
                            className="w-[35px] h-[35px] rounded-full border-2 shrink-0 flex justify-center items-center font-semibold capitalize text-white"
                            style={{ backgroundColor }}
                          >
                            {allUser?.map((user) => {
                              if (user?.user?.id === item?.assignee) {
                                const username = user?.user?.username;
                                return username ? username.charAt(0) : null;
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 ">QC</td>

                      <td className="px-2 ">
                        <div className="flex justify-center items-center px-5 w-full">
                          <Link to={`/${dataSet?.redirect}/${item?.id}`}>
                            <StatusBtnOutLine
                              className={`${dataSet.textColor}`}
                            >
                              {dataSet?.btnText}
                            </StatusBtnOutLine>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;

// const allTask = [
//   {
//     id: 12,
//     task_name: "Qatar",
//     description: "PHA+UWF0YXI8L3A+",
//     task_submit: null,
//     start_date: "2023-11-06T06:37:15.832314Z",
//     due_date: "2023-11-06T11:30:00Z",
//     priority: "medium",
//     status: "todo",
//     points: 10,
//     assigner: 2,
//     assignee: 7,
//   },

//   {
//     id: 11,
//     task_name: "Sri Lanka",
//     description: "PHA+U3JpIExhbmthPC9wPg==",
//     task_submit: null,
//     start_date: "2023-11-06T06:32:51.349855Z",
//     due_date: "2023-11-06T11:00:00Z",
//     priority: "high",
//     status: "todo",
//     points: 10,
//     assigner: 2,
//     assignee: 5,
//   },
// ];

// const allUser = [
//   {
//     user: {
//       id: 1,
//       username: "jabed",
//       email: "jabedahmedrifat1@gmail.com",
//     },
//     type: "member",
//     score: 70,
//     image:
//       "https://microbuddy.tech/wp-content/uploads/2023/09/158189203_493441764982556_2263670624526124305_n.jpg",
//     category: "Software Developer",
//     assigned_tasks_count: 0,
//     assigned_tasks_total: 0,
//   },
//   {
//     user: {
//       id: 2,
//       username: "SuperAdmin",
//       email: "superadmin@gmail.com",
//     },
//     type: "superadmin",
//     score: 450,
//     image: "https://i.ibb.co/ZcshpH2/hHML1uF.gif",
//     category: "BEST OF The BEST",
//     assigned_tasks_count: 0,
//     assigned_tasks_total: 0,
//   },
//   {
//     user: {
//       id: 3,
//       username: "arafat",
//       email: "arafatsheikh1997@gmail.com",
//     },
//     type: "admin",
//     score: 0,
//     image:
//       "https://microbuddy.tech/wp-content/uploads/2023/09/arafat-microbuddy.jpg",
//     category: "Executive",
//     assigned_tasks_count: 0,
//     assigned_tasks_total: 0,
//   },
//   {
//     user: {
//       id: 4,
//       username: "adip",
//       email: "owlhut2347@gmail.com",
//     },
//     type: "admin",
//     score: 0,
//     image:
//       "https://microbuddy.tech/wp-content/uploads/2023/09/adip-microbuddy.jpg",
//     category: "Designer",
//     assigned_tasks_count: 0,
//     assigned_tasks_total: 0,
//   },
// ];
