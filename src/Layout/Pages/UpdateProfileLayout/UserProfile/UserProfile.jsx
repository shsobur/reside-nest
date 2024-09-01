import { MdOutlineMail } from "react-icons/md";
import "../UserProfile/UserProfile.css";
import { useContext } from "react";
import { AuthContext } from "../../../conmponents/AuthProvider/AuthProvider";

const UserProfile = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="main_profile_outer_contaienr">
      <div className="main_profile_inner_contaienr">

        <div className="main_profile_section_container">
          <div className="profile_image_container">
            <p><img src={user.photoURL} alt="user img" /></p>
          </div>

          <div className="main_user_profile_info_container">
            <h2>{user.displayName}</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              <h3 className="text-xl"><MdOutlineMail /></h3>
              <p>{user.email}</p>
            </div>
            <button>Update</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
