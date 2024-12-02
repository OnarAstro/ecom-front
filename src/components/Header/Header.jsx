import Navbar from "../Navbar/Navbar";
import { BiUserCircle } from "react-icons/bi";
import { MdClose, MdMenu, MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { ShopContext } from "../../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="header">
      <div className="header-container container flex items-center justify-between">
        <div className="logo-header flex items-center">
          {/* Icon appears only on small screens */}
          <div className="block md:hidden">
            {!menuOpened ? (
              <MdMenu
                className="cursor-pointer menu-icon"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="cursor-pointer close-icon"
                onClick={toggleMenu}
              />
            )}
          </div>
          <Link to="/"><h1>Astro</h1></Link>
        </div>
        <Navbar menuOpened={menuOpened} />

        <div className="icons flex items-center gap-4">
          {localStorage.getItem("auth-token") ? (
            <NavLink
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              to="/logout"
              className="none2"
            >
              <CgLogOut />
            </NavLink>
          ) : (
            <NavLink to="/login" className="none2">
              <BiUserCircle />
            </NavLink>
          )}
          <NavLink to="/cart-page">
            <MdOutlineShoppingBag />
            <span> {getTotalCartItems()}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
