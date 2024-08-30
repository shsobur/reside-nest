/* eslint-disable react/no-unescaped-entities */
import { FaRegFaceFlushed } from "react-icons/fa6";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { SiFacepunch } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../../../conmponents/SocialLogin/SocialLogin";

const SingIn = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  }

  return (
    <div className="main_authentication_page_outer_container">
      <div className="main_authentication_page_inner_container">
        <div className="main_authentication_form_container">
          <div className="authentication_form_title">
            <h2>Sing In</h2>
          </div>

          <form>
            <div className="main_authentication_form_outer_container">

              <div className="authentication_form_input_container">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="authentication_form_input_container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password(***)"
                />
              </div>

              <div className="pass_show_icon">
                <h2 onClick={handleShowPass}>
                  {showPass ? <FaRegFaceFlushed /> : <SiFacepunch />}
                </h2>
              </div>

              <div className="authentication_submit_btn">
                <input type="submit" value="Sing Up" />
              </div>

              <div>
                <SocialLogin></SocialLogin>
              </div>

              <h2 className="mt-3 text-center">
                Don't have an account go to{" "}
                <Link to="/singup">
                  <span className="text-blue-600 underline">Sing in</span> now?
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;