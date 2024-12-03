import Navbar from "../Navbar/Navbar";
import { BiUserCircle } from "react-icons/bi";
import { MdClose, MdMenu, MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { ShopContext } from "../../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [username, setUsername] = useState(null); // تخزين اسم المستخدم
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);

  // جلب اسم المستخدم من localStorage أو استدعاء API
  useEffect(() => {
    const fetchUsername = async () => {
      const token = localStorage.getItem("auth-token");
      if (token) {
        // إذا كنت تحتاج إلى جلب اسم المستخدم من API
        try {
          const response = await fetch("https://ecom-node-production.up.railway.app/getuser", {
            method: "GET",
            headers: {
              "auth-token": token,
            },
          });
          const data = await response.json();
          setUsername(data.name);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUsername();
  }, []);

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
          <h1>Astro</h1>
        </div>
        <Navbar menuOpened={menuOpened} />

        <div className="icons flex items-center gap-4">
          {localStorage.getItem("auth-token") ? (
            <div className="users">
              {username && <span className="username">{username.slice(0, 7)}</span>}
              <NavLink
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  setUsername(null);
                  window.location.replace("/");
                }}
                to="/logout"
                className="none2"
              >
                <CgLogOut className="logout-icon" />
              </NavLink>
            </div>
          ) : (
            <NavLink to="/login" className="none2">
              <BiUserCircle />
            </NavLink>
          )}
          <NavLink to="/cart-page" className="logout-icon">
            <MdOutlineShoppingBag />
            <span> {getTotalCartItems()}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
