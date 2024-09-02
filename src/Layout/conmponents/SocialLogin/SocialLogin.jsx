import { FaGithub, FaGoogle } from "react-icons/fa6";
import "../SocialLogin/SocialLogin.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingIn, githubSingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSingIn()
    .then(result => {
      const googleSingInUser = result.user
      console.log(googleSingInUser);
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed In successfully"
      });
      navigate("/")
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleGithubSingIn = () => {
    githubSingIn()
    .then((result) => {
      console.log(result.user)
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed In successfully"
      });
      navigate("/")
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="main_social_login_icon_container">
      <p onClick={handleGoogleSingIn}><FaGoogle /></p>
      <p onClick={handleGithubSingIn}><FaGithub /></p>
    </div>
  );
};

export default SocialLogin;