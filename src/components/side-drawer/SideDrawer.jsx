import logo from '../../assets/mb logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiCalendar, FiSettings } from 'react-icons/fi';
import { BiTask } from 'react-icons/bi';
import { GrLogout } from 'react-icons/gr';
import { MdHistory } from 'react-icons/md';
import { RiListCheck3 } from 'react-icons/ri';
import { LuClipboardList } from 'react-icons/lu';
import { PiUsersThreeBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { addLogout } from '../../redux/features/user/userSlice';
import { useUserDetailsQuery } from '../../redux/features/user/userApi';


const SideDrawer = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const {type, email, username, userId} = useSelector(state=> state.user);
  const { data: userDetails } = useUserDetailsQuery(userId);


  console.log(type)
  
  const userRole = type;
  
  const Menues = [
    {
      title: 'Dashboard',
      url: '/',
      icons: <FiGrid />,
    },
    {
      title: 'My Task',
      url: '/my-task',
      icons: <BiTask />,
    },
    {
      title: 'Calender',
      url: '/calender',
      icons: <FiCalendar />,
    },
    {
      title: 'Task List',
      url: '/task-list',
      icons: <RiListCheck3 />,
    },
    {
      title: 'Employee',
      url: '/employee',
      icons: <PiUsersThreeBold />,
    },
    {
      title: 'Notice List',
      url: '/notices',
      icons: <LuClipboardList />,
    },
    {
      title: 'History',
      url: '/history',
      icons: <MdHistory />,
    },
    {
      title: 'Setting',
      url: '/setting',
      icons: <FiSettings />,
    },
  ];

  const filteredMenus = Menues.filter(menu => {
    if (userRole === ('superadmin')) {
      return true;
    } 

    else if (userRole === 'admin') {
      return !['History'].includes(menu.title);
    }

     else if (userRole === 'member') {
      return !['Task List', 'Employee', 'History', 'Setting'].includes(menu.title);
    }
  });

  return (
    <div>
      <aside className="flex flex-col w-[345px] h-screen pt-8 overflow-y-auto border-r shadow-lg sticky top-0">
        <Link to="/" className="px-4">
          <img src={logo} alt="" width={247} height={94} />
        </Link>

        <div className="mt-6 ml-[38px] font-semibold uppercase text-[#96A0AF]">
          <p>Main Menu</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-4 text-[#96A0AF]">
          <nav>
            {filteredMenus.map((menu, i) => (
              <Link
                key={i}
                className={`flex items-center px-[30px] mx-1 py-5 ${
                  location.pathname === menu.url
                    ? 'text-[#8E5CBC] border-l-4 border-[#8E5CBC] z-100'
                    : ''
                }`}
                to={menu.url}
              >
                <span className="text-[22px]">{menu.icons}</span>
                <span className="mx-4 font-medium">{menu.title}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 px-4">
            <img className="object-cover rounded-full h-[61px] w-[61px]" src={userDetails?.image}/>

            <p className="flex flex-col mx-2">
              <span className="font-medium text-[#273240] text-[21px] uppercase">
                {username}
              </span>
              <span className="uppercase text-[13px] text-[#216FED] font-medium">
                {email}
              </span>
            </p>

            <button onClick={()=>dispatch(addLogout())} className="text-[31px]">
              <GrLogout />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideDrawer;
