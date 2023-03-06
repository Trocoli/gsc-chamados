import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { HomeIcon, ListIcon, LogoutIcon } from "../Icons/index";
import SidebarItem from "./SidebarItem";
import Logo from "./Icons/logo.png";
import Image from "next/image";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <aside className="flex flex-col bg-gradient-to-r from from-gray-700 to-gray-900 shadow-lg">
      <div className="flex-grow">
        <ul>
          <div className="p-2 "><Image  src={Logo} width={50} height={50} alt='logo'/></div>
          <SidebarItem text="Abertos" url="/admin" icon={HomeIcon} />
          <SidebarItem text="Antigos" url="/todos" icon={ListIcon} />
        </ul>
      </div>
      <ul className="">
        <SidebarItem text="Logout" icon={LogoutIcon} onClick={logout} />
      </ul>
    </aside>
  );
};

export default Sidebar;
