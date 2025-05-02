import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = ({ visible, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstore-v2-backend-web-app.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data.token) {
          toast.success("Login successfully");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-1 backdrop-blur-sm  z-50">
      <div className="m-4 w-full max-w-md bg-white p-6 border border-pink-400 rounded-2xl shadow-lg overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title & Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-3xl">Login</h2>
            <button type="button" className="font-bold text-xl text-black" onClick={onClose}>
              X
            </button>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-left">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border w-full border-gray-300 rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Please enter your email.</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-left">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 border w-full border-gray-300 rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Please enter your password.</p>}
          </div>

          {/* Buttons & Signup Redirect */}
          <div className="flex justify-between items-center">
            <button className="!bg-pink-400 text-white px-6 py-2 rounded-lg hover:!bg-pink-300 w-full">
              Login
            </button>
          </div>
          <p className="mt-4 text-center">
            Not registered?{" "}
            <Link to="/signup" className="text-blue-500 underline cursor-pointer">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
