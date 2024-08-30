import { SiFacepunch } from "react-icons/si";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { useState } from "react";
import { FaRegFaceFlushed } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SocialLogin from "../../../conmponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
  };

  return (
    <div className="main_authentication_page_outer_container">
      <div className="main_authentication_page_inner_container">
        <div className="main_authentication_form_container">
          <div className="authentication_form_title">
            <h2>Sing Up</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main_authentication_form_outer_container">
              <div className="authentication_form_input_container">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                <div>
                  {errors.name && (
                    <span className="text-xs font-light text-red-500">
                      Name is required
                    </span>
                  )}
                </div>
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
                  {...register("email", { required: true })}
                />
                <div>
                  {errors.email && (
                    <span className="text-xs font-light text-red-500">
                      Email is required
                    </span>
                  )}
                </div>
              </div>

              <div className="authentication_form_input_container">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password(***)"
                  {...register(
                    "password",
                    { required: true },
                    { required: true, minLength: 6 }
                  )}
                />

                <div>
                  {errors.password?.type === "required" && (
                    <span className="text-xs font-light text-red-500">
                      Your password should be least 6 characters
                    </span>
                  )}
                </div>

                <div>
                  {errors.password?.type === "minLength" && (
                    <span className="text-xs font-light text-red-500">
                      Your password should be least 6 characters
                    </span>
                  )}
                </div>

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
