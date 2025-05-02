import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOnClose = () => setShowLoginModal(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "https://bookstore-v2-backend-web-app.onrender.com/user/signup",
        userInfo
      );

      if (response.data && response.data.token) {
        toast.success("Signup Successfully");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("User", JSON.stringify(response.data.user));
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-1 backdrop-blur-sm z-50">
      <div className="m-4 w-full max-w-md bg-white p-6 border-2 border-pink-400 rounded-2xl shadow-lg">
        {/* Close Button & Title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-3xl">Sign Up</h2>
          <Link to="/" className="font-bold text-xl text-black">X</Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">Please enter your name.</p>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Please enter your email.</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col text-left">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">Please enter your password.</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full !bg-pink-500 text-white py-2 rounded-lg hover:!bg-pink-400 transition">
            Sign Up
          </button>

          {/* Already Registered? */}
          <p className="mt-2 text-center">
            Already registered?{" "}
            <button type="button" onClick={() => setShowLoginModal(true)} className="text-blue-500 underline">
              Login
            </button>
          </p>
        </form>
      </div>

      {/* Login Modal */}
      {showLoginModal && <Login onClose={handleOnClose} visible={showLoginModal} />}
    </div>
  );
};

export default SignUp;
