import { FiEye, FiSearch } from "react-icons/fi";
import { BsCalendarFill } from "react-icons/bs";
import "./Notices.css";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";

const Notices = () => {
  
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      task_point: "50",
      position: "Software engineer",
      assign: 6,
      role: "Admin",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      task_point: "60",
      position: "Product designer",
      assign: 7,
      role: "Admin",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      task_point: "70",
      position: "Front-end developer",
      assign: 8,
      role: "Member",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      task_point: "80",
      position: "Laravel engineer",
      assign: 9,
      role: "Pending",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      task_point: "90",
      position: "Open source manager",
      assign: 11,
      role: "Member",
    },
  ];

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
          <Link to="/create-notice">
          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <p className="text-[18px] font-semibold">+ New Notice</p>
          </button>
          </Link>

          <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
            <BsCalendarFill className="text-[24px] " />
            <p className="text-[18px] font-semibold">Filter</p>
          </button>
        </div>
      </section>

      <section>
        <div className="mt-12">

          <div className="text-[#273240] flex flex-col gap-y-[10px]">
            {tableItems.map((item, idx) => (
              <div
                key={idx}
                className="w-full border flex justify-between items-center bg-white rounded-lg shadow-sm px-4  py-2 notice"
              >
                <div className="flex items-center gap-x-3 whitespace-nowrap">
                  <img
                    src={item.avatar}
                    className="w-[81px] h-[81px] rounded-[20px]"
                  />
                  <div>
                    <p className="text-[24px] font-medium text-[#273240]">
                      Upcoming Holiday Events....
                    </p>
                    <p className="text-[13px] text-[#216FED] mt-2 ">
                      All concerned may kindly be informed that the office{" "}
                      <br />
                      activities of MicroBuddy will remain closed on 28th
                      ............
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div className="text-center">
                    <p className="text-[#737B8B]">Created Date</p>
                    <p className="text-[20px] text-[#216FED]">
                      12/10/23 <br />
                      13:20
                    </p>
                  </div>

                  <div >
                    <Link to={`/view-notice/${idx+1}`}><button className="text-[30px] text-black"><FiEye /></button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default Notices;
