import { UserGroupIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className=" ">
      <div
        className={` flex flex-col p-3 dark:shadow-sm dark:shadow-slate-200  shadow  ${
          !sidebarOpen ? "-translate-x-6 w-20" : "w-64"
        } transition duration-300 transform h-screen   `}
      >
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <NavItem
                sidebarOpen={sidebarOpen}
                Icon={UserGroupIcon}
                title="Manage Staff"
                to="/managestaff"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// eslint-disable-next-line react/prop-types
const NavItem = ({ sidebarOpen, Icon, title, to }) => {
  return (
    <li className="rounded-sm">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `group flex items-center p-2 space-x-3 rounded-md ${
                !sidebarOpen && "justify-end"
              } text-base active:text-white text-white font-normal bg-[#147792] cursor-pointer`
            : `flex items-center p-2 space-x-3 rounded-md text-base ${
                !sidebarOpen && "justify-end"
              } text-gray-700 hover:bg-gray-200 dark:hover:bg-black cursor-pointer`
        }
      >
        <Icon className="w-6 group-aria-checked:text-white dark:text-gray-200 " />
        <span
          className={`font-body ${!sidebarOpen && "hidden"} dark:text-gray-200`}
        >
          {title}
        </span>
      </NavLink>
    </li>
  );
};
