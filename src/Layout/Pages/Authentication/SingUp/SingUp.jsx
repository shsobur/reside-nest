import { SiFacepunch } from "react-icons/si";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { useState } from "react";
import { FaRegFaceFlushed } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="main_authentication_page_outer_container">
      <div className="main_authentication_page_inner_container">
        <div className="main_authentication_form_container">
          <div className="authentication_form_title">
            <h2>Sing Up</h2>
          </div>

          <form>
            <div className="main_authentication_form_outer_container">
              <div className="authentication_form_input_container">
                <input type="text" name="name" placeholder="Enter Your Name" />
              </div>

              <div className="authentication_form_input_container">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL (Optional)"
                />
              </div>

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
                  placeholder="Enter Your Password(***)"
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

              <h2 className="mt-3 text-center">
                Alrady have an account go to{" "}
                <Link to="/singin">
                  <span className="text-blue-600 underline">Sing Up</span> now?
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
