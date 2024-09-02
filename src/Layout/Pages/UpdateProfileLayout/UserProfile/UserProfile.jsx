import { MdOutlineMail } from "react-icons/md";
import "../UserProfile/UserProfile.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../conmponents/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import ScrollToTop from "../../../conmponents/ScrollToTop/ScrollToTop";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { updateUserProfile } = useContext(AuthContext);
  const [title, setTitle] = useState(null);

  const handleUpdateProfile = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;

    updateUserProfile(name, photo).then(() => {
      console.log("use name and photo updated");
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed Up successfully",
      });
      setTitle("");
    });
  };

  console.log(user.displayName);

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div className="main_profile_outer_contaienr">
        <div className="main_profile_inner_contaienr">
          <div className="main_profile_section_container">
            <div className="profile_image_container">
              <p
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src={user.photoURL} alt="user img" />
              </p>
            </div>

            <div className="main_user_profile_info_container">
              <h2
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {user.displayName}
              </h2>
              <div className="flex items-center justify-center gap-2 mt-5">
                <h3
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className="text-xl"
                >
                  <MdOutlineMail />
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  {user.email}
                </p>
              </div>
              <button
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
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

                      <form onSubmit={handleUpdateProfile}>
                        <div className="update_input_container">
                          <input
                            type="text"
                            name="name"
                            value={title}
                            defaultValue={user.displayName}
                            placeholder="Enter new name"
                          />
                        </div>

                        <div className="update_input_container">
                          <input
                            type="text"
                            name="photo"
                            value={title}
                            defaultValue={user.photoURL}
                            placeholder="Photo URL"
                          />
                        </div>

                        <div className="profile_update_btn">
                          <input type="submit" value="Update" />
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
    </>
  );
};

export default UserProfile;
