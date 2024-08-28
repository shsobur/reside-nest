import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="main_nav_bar_outer_container">
        <div className="main_nav_bar_inner_container">
          <div className="web_name_container">
            <h2>ResideNest</h2>
          </div>

          <div className="main_navigater_outer_container">
            <ul>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#8b5cf4] text-xl font-bold underline" : "text-[#151515] text-xl font-bold" 
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/updateprofile"
                className={({ isActive }) =>
                  isActive ? "text-[#8b5cf4] text-xl font-bold underline" : "text-[#151515] text-xl font-bold" 
                }
              >
                <li>Update Profile</li>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#8b5cf4] text-xl font-bold underline" : "text-[#151515] text-xl font-bold" 
                }
              >
                <li>Contact</li>
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-[#8b5cf4] text-xl font-bold underline" : "text-[#151515] text-xl font-bold" 
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
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
