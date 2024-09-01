import { MdOutlineMail } from "react-icons/md";
import "../UserProfile/UserProfile.css";
import { useContext } from "react";
import { AuthContext } from "../../../conmponents/AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="main_profile_outer_contaienr">
      <div className="main_profile_inner_contaienr">
        <div className="main_profile_section_container">
          <div className="profile_image_container">
            <p>
              <img src={user.photoURL} alt="user img" />
            </p>
          </div>

          <div className="main_user_profile_info_container">
            <h2>{user.displayName}</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              <h3 className="text-xl">
                <MdOutlineMail />
              </h3>
              <p>{user.email}</p>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Update
            </button>
          </div>

          <div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <div>
                  <div className="update_modal_title">
                    <h2>Update Now</h2>

                    <form>
                      <div className="update_input_container">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter new name"
                        />
                      </div>

                      <div className="update_input_container">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter new password"
                        />
                      </div>

                      <div className="profile_update_btn">
                        <button>Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
