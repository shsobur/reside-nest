/* eslint-disable react/no-unescaped-entities */
import { FaRegFaceFlushed } from "react-icons/fa6";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { SiFacepunch } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import SocialLogin from "../../../conmponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../conmponents/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import ScrollToTop from "../../../conmponents/ScrollToTop/ScrollToTop";

const SingIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { singInUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        const singInUser = result.user;
        console.log(singInUser);
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
          title: "Signed in successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("invalid username or password! Try again.");
      });
  };

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div className="main_authentication_page_outer_container">
        <div className="main_authentication_page_inner_container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="main_authentication_form_container"
          >
            <div className="authentication_form_title">
              <h2>Sing In</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="main_authentication_form_outer_container">
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
                        Email is required.
                      </span>
                    )}
                  </div>
                </div>

                <div className="authentication_form_input_container">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Password(***)"
                    {...register("password", { required: true })}
                  />
                  <div>
                    {errors.password && (
                      <span className="text-xs font-light text-red-500">
                        Email is required.
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

                <div className="mt-2">
                  <span className="text-sm text-red-500 font-light">
                    {error}
                  </span>
                </div>

                <div>
                  <SocialLogin></SocialLogin>
                </div>

                <h2 className="mt-3 text-center">
                  Don't have an account go to{" "}
                  <Link to="/singup">
                    <span className="text-blue-600 underline">Sing in</span>{" "}
                    now?
                  </Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingIn;
