import { FiEye } from 'react-icons/fi';
import Title from '../../utils/Title';
import { Link } from 'react-router-dom';


const Employee = () => {

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

      <Title>Employee</Title>

      <section>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left bg-gray-50">

            <thead className=" text-gray-600 font-medium border-b uppercase">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Designation</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Task Point</th>
                <th className="py-3 px-6">Task Assign</th>
                <th className="py-3 px-6">Over Date</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>

            <tbody className="text-[#273240] divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.avatar} className="w-[55px] h-[55px] rounded-full" />
                    <p className="block text-[16px] font-medium">
                      #0001234
                    </p>
                  </td>

                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    {item.name}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    {item.position}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    {item.task_point}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">{item.assign}</td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    {item.assign - 1}
                  </td>
                  <td className={`px-6 py-8 whitespace-nowrap uppercase ${
                      item.role === "Admin" ? "text-[#216FED]" : item.role === "Member"
                        ? "text-[#ED9B21]"
                        : "text-[#32D16D]"
                    }`}
                  >
                    {item.role}
                  </td>

                  <td className='text-[20px]'>
                    <Link to={`/employee-detail-view/${idx+1}`}><button> <FiEye/></button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
    </div>
  );
};

export default Employee;