/* eslint-disable react/prop-types */
import { MdHomeFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosWoman, IoMdMan } from "react-icons/io";
import { TbMoodKid } from "react-icons/tb";
import "./Navbar.css";

const Navbar = ({ menuOpened }) => {
  return (
    <nav className={`navbar ${menuOpened ? "visible" : "hidden"}`}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="d-flex align-items-center gap-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to="/mens"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="d-flex align-items-center gap-1">
          <IoMdMan />
          Men&lsquo;s
        </div>
      </NavLink>
      <NavLink
        to="/womens"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="d-flex align-items-center gap-1">
          <IoIosWoman />
          Women&lsquo;s
        </div>
      </NavLink>
      <NavLink
        to="/kids"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="d-flex align-items-center gap-1">
          <TbMoodKid />
          Kid&lsquo;s
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
