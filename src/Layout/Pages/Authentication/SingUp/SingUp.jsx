import { SiFacepunch } from "react-icons/si";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { useContext, useState } from "react";
import { FaRegFaceFlushed } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../conmponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../conmponents/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
  const [showPass, setShowPass] = useState(false);
  const {singUpUser} = useContext(AuthContext);
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
    const name = data.name;
    const email = data.email;
    const password = data.password;

    console.log(name, email, password);

    singUpUser(email, password)
    .then(result => {
      const singUpUser = result.user
      console.log(singUpUser);
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
        title: "Signed Up successfully"
      });
      navigate("/");
    })
    .catch(error => {
      console.log(error)
    })
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
                      Name is required.
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
                      Email is required.
                    </span>
                  )}
                </div>
              </div>

              <div className="authentication_form_input_container">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password(***)"
                  {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/ })}
                />
              </div>

              <div className="pass_show_icon">
                <h2 onClick={handleShowPass}>
                  {showPass ? <FaRegFaceFlushed /> : <SiFacepunch />}
                </h2>
              </div>

              <div className="mb-5">
                  {errors.password?.type === "required" && (
                    <span className="text-xs font-light text-red-500">
                      Password is required.
                    </span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span className="text-xs font-light text-red-500">
                      Password should be at least 6 characters.
                    </span>
                  )}

                  {errors.password?.type === "pattern" && (
                    <span className="text-xs font-light text-red-500">
                      Use at least one uppercase(A-Z) and lowercase(a-z) character.
                    </span>
                  )}
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
