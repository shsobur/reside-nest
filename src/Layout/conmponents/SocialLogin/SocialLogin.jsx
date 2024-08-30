import { FaGithub, FaGoogle } from "react-icons/fa6";
import "../SocialLogin/SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="main_social_login_icon_container">
      <p><FaGoogle /></p>
      <p><FaGithub /></p>
    </div>
  );
};

export default SocialLogin;