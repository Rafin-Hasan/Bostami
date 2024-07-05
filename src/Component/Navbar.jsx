import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { HiOutlineMoon } from "react-icons/hi2";
import { CiSun } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";

export const Navbar = () => {
  const [mode, setMode] = useState(false);
  const darkMode = () => {
    setMode(!mode);
    document.body.classList.toggle("dark", !darkMode);
  };
  const [show, setShow] = useState(false);
  const menu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav>
        <div className="container px-[15px]">
          <div className="menu-row p-5 flex flex-wrap justify-between mb-[30px]">
            <div className="logo-col">
              <Link to="#">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="relative">
              <MdMenuBook
                onClick={menu}
                className="text-3xl text-[#e12a72] md:hidden"
              />
              {show && (
                <div className="menu absolute top-[150%] right-0">
                  <ul className="flex flex-col gap-4 text-[13px] font-medium font-poppins text-inherit ">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/"
                      >
                        {" "}
                        <IoHomeOutline className="text-xl" />
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/About"
                      >
                        {" "}
                        <FaRegAddressCard className="text-xl" />
                        About
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/Resume"
                      >
                        {" "}
                        <RiFileUserLine className="text-xl" />
                        Resume
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/Works"
                      >
                        {" "}
                        <IoBriefcaseOutline className="text-xl" />
                        Works
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/Blogs"
                      >
                        {" "}
                        <FaRegNewspaper className="text-xl" />
                        Blogs
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                            : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                        }
                        to="/Contact"
                      >
                        {" "}
                        <FaRegAddressBook className="text-xl" />
                        Contacts
                      </NavLink>
                    </li>
                  </ul>
                  <div
                    className="theme w-[45px] h-[45px] bg-white rounded-3xl mt-[30px] text-[22px] font-light flex justify-center items-center text-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white dark:bg-[#1d1d1d] dark:text-[#A6A6A6] transition duration-300"
                    onClick={darkMode}
                  >
                    {mode ? <CiSun /> : <HiOutlineMoon />}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:block mb-[80px]">
              <div className="menu flex">
                <ul className="flex flex-wrap gap-4 text-[13px] font-medium font-poppins text-inherit">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/"
                    >
                      {" "}
                      <IoHomeOutline className="text-xl" />
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/About"
                    >
                      {" "}
                      <FaRegAddressCard className="text-xl" />
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/Resume"
                    >
                      {" "}
                      <RiFileUserLine className="text-xl" />
                      Resume
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/Works"
                    >
                      {" "}
                      <IoBriefcaseOutline className="text-xl" />
                      Works
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/Blogs"
                    >
                      {" "}
                      <FaRegNewspaper className="text-xl" />
                      Blogs
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center"
                          : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:text-white"
                      }
                      to="/Contact"
                    >
                      {" "}
                      <FaRegAddressBook className="text-xl" />
                      Contacts
                    </NavLink>
                  </li>
                </ul>
                <div
                  className="theme w-[45px] h-[45px] bg-white rounded-3xl ml-[30px] text-[22px] font-light flex justify-center items-center text-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white dark:bg-[#1d1d1d] dark:text-[#A6A6A6] transition duration-300"
                  onClick={darkMode}
                >
                  {mode ? <CiSun /> : <HiOutlineMoon />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
