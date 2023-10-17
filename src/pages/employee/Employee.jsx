import { FiEye } from 'react-icons/fi';
import Title from '../../utils/Title';
import { Link } from 'react-router-dom';
import { useGetAllUserQuery } from '../../redux/features/user/userApi';


const Employee = () => {

const {data: allUser} = useGetAllUserQuery();
console.log(allUser)

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
              {allUser?.map((user, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-[55px] h-[55px] rounded-full" />
                    <p className="block text-[16px] font-medium">
                      {user.user.id}
                    </p>
                  </td>

                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    {user.user.username}
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap uppercase">
                    Software Developer
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">{user.user.email}</td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    123
                  </td>
                  <td className="px-6 py-8 whitespace-nowrap">{idx+3}</td>
                  <td className="px-6 py-8 whitespace-nowrap">
                    154
                  </td>
                  <td className={`px-6 py-8 whitespace-nowrap uppercase ${
                      user.type === "superadmin" ? "text-[#216FED]" : user.type === "admin"
                        ? "text-[#ED9B21]"
                        : "text-[#32D16D]"
                    }`}
                  >
                    {user.type}
                  </td>

                  <td className='text-[20px]'>
                    <Link to={`/employee-detail-view/${user.user.id}`}><button> <FiEye/></button></Link>
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