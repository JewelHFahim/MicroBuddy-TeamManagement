import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SideDrawer from "../../components/side-drawer/SideDrawer";

const Main = () => {
  return (
    <div className="flex font-Poppins">
      <SideDrawer />
      <div className="w-full">
        <Navbar/>
        <div className="pl-[33px] pr-[90px]">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Main;
