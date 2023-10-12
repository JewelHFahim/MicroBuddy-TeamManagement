import Title from "../../../utils/Title";
import { TbEdit } from 'react-icons/tb';


const ViewNotice = () => {
  return (
    <div>
      <Title>View Notice</Title>

      <section className="w-full h-[457px] rounded-[46px] shadow-md border border-blue-700 p-10 flex justify-between items-start">
        <div className="w-[95%]">
          <h1 className="text-[80px] font-semibold text-secondary">
            Upcoming Holiday Event
          </h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[30px] h-[30px] rounded-full bg-yellow-200 border-2 border-white"></div>
              <p className="text-black font-semibold">William Jack</p>
            </div>
            <span className="text-blue-700 text-xl">* </span>
            <p> 12/10/2023 - 10.00 am</p>
          </div>

          <p className="text-[20px] text-blue-700 mt-10 w-[70%]">
            All concerned may kindly be informed that the office activities of
            MicroBuddy will remain closed on 28th ............
          </p>
        </div>

        <button className="text-[45px]"><TbEdit/></button>
      </section>
    </div>
  );
};

export default ViewNotice;
