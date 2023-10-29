/* eslint-disable react/prop-types */
import StatusTitle from "../../../utils/StatusTitle";
import TableHead from "../../../utils/TableHead";
import { userProPic } from "../../../utils/Important";
import StatusBtnOutLine from "../../../utils/StatusBtnOutLine";
import { Link } from "react-router-dom";
import DateFormat from "../../../utils/DateFormat";

const Card = ({ cardData, dataSet }) => {
  return (
    <>
      <section className="mt-[32px]">
        <StatusTitle className={`${dataSet.bgColor}`}>
          {dataSet.btnText}
        </StatusTitle>

        <div className="mt-[18px] flex flex-col gap-[20px]">
          {cardData?.map((item, i) => (
            <div key={i}>
              <div className="w-full h-[158px] rounded-[20px] bg-white shadow-md">
                <table className="w-full table-auto text-center">
                  <TableHead />

                  <tbody className="text-gray-600 ">
                    <tr>
                      <td className="flex items-center gap-x-[40px] px-6 whitespace-nowrap ">
                        <img
                          src={userProPic}
                          className="w-[90px] h-[90px]  rounded-[31px]"
                        />

                        <div className="text-left">
                          <span className="block text-[#216FED] font-[500]">
                            #TASKID-{item?.id}
                          </span>
                          <span className="block text-[#273240] text-[20px] font-semibold">
                            {item?.task_name}
                          </span>
                          <span className="block text-[#216FED] font-[300]">
                            {DateFormat(item?.start_date)}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-[#216FED] font-[300]">
                        {DateFormat(item?.due_date)}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-center items-center">
                          <div className="w-[35px] h-[35px] rounded-full border-2 shrink-0 flex justify-center items-center font-semibold">
                            {item?.assignee}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">QC</td>

                      <td className="px-2">
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
