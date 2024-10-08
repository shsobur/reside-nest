import "../Navbar/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { SiHomebridge } from "react-icons/si";
import { AuthContext } from "../../conmponents/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const userImage = user?.photoURL;
  console.log(user?.photoURL);

  const handelBurgerMenuIcon = () => {
    setBurgerMenu(!burgerMenu);
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Logout successfull",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <>
      <nav className="main_nav_bar_outer_container">
        <div className="main_nav_bar_inner_container">
          <Link to="/">
            <div className="web_name_container">
              <div>
                <SiHomebridge />
              </div>
              <h2>
                Reside<span className="text-[#0D263B]">Nest</span>
              </h2>
            </div>
          </Link>

          <div
            id="main_navigater_outer_container"
            className={
              burgerMenu
                ? "#main_navigater_outer_container isActive"
                : "#main_navigater_outer_container"
            }
          >
            <ul onClick={handelBurgerMenuIcon}>
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
            <div>
              {user ? (
                <div onClick={handleLogOut} className="sing_in_btn">
                  Sing Out
                </div>
              ) : (
                <Link to="/singin">
                  <div className="sing_in_btn">Sing In</div>
                </Link>
              )}
            </div>

            <div className="user_name_title">
              {userImage ? (
                <div className="nav_user_image">
                  <img src={userImage} title={user.displayName} />
                </div>
              ) : (
                <div className="nav_user_icon">
                  <FaRegCircleUser />
                </div>
              )}
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
