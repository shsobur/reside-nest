import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handelBurgerMenuIcon = () => {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <>
      <nav className="main_nav_bar_outer_container">
        <div className="main_nav_bar_inner_container">
          <div className="web_name_container">
            <h2>ResideNest</h2>
          </div>

          <div id="main_navigater_outer_container">
            <ul>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8b5cf4] text-lg font-bold underline"
                    : "text-[#151515] text-lg font-bold"
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/updateprofile"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8b5cf4] text-lg font-bold underline"
                    : "text-[#151515] text-lg font-bold"
                }
              >
                <li>Update Profile</li>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8b5cf4] text-lg font-bold underline"
                    : "text-[#151515] text-lg font-bold"
                }
              >
                <li>Contact</li>
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8b5cf4] text-lg font-bold underline"
                    : "text-[#151515] text-lg font-bold"
                }
              >
                <li>About Us</li>
              </NavLink>
            </ul>
          </div>

          <div className="nav_bar_user_Info_contaienr">
            <div className="sing_in_btn">Sing In</div>

            <div className="nav_user_icon">
              <FaRegCircleUser />
            </div>

            <div
              onClick={handelBurgerMenuIcon}
              className="burger_menu_container"
            >
              {burgerMenu ? (
                <div>
                  <IoIosMenu />
                </div>
              ) : (
                <div>
                  <RxCross2 />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
