import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

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

      if (response.data) {
        toast.success("Signup Successfully");
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
    <>
      <div className="fixed inset-0 bg-opacity-1 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="m-4 w-[400px] bg-white p-6 border-2 border-pink-400 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title & Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-3xl">Sign Up</h2>
              <Link to="/" className="font-bold text-xl text-black">X</Link>
            </div>

            {/* Name Field */}
            <div className="mb-4 flex flex-col">
              <p className="mb-2 text-left w-full">Name</p>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="px-2 py-2 border w-80 border-gray-300 rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Please enter your name.</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4 flex flex-col">
              <p className="mb-2 text-left w-full">Email</p>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-2 py-2 border w-80 border-gray-300 rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Please enter your email.</p>}
            </div>

            {/* Password Field */}
            <div className="mb-4 flex flex-col">
              <p className="mb-2 text-left w-full">Password</p>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="px-2 py-2 border w-80 border-gray-300 rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">Please enter your password.</p>}
            </div>

            {/* Buttons & Login Redirect */}
            <div className="flex justify-between items-center">
              <button type="submit" className="!bg-pink-400 text-white px-6 py-2 rounded-lg hover:!bg-pink-300 w-full">
                Sign Up
              </button>
              <p className="mt-4 text-center">
                Have an account?{" "}
                <button type="button" onClick={() => setShowLoginModal(true)} className="text-blue-500 underline">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
        {/* Login Modal */}
        {showLoginModal && <Login onClose={handleOnClose} visible={showLoginModal} />}
      </div>
    </>
  );
};

export default SignUp;
