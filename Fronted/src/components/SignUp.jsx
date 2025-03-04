import React,{useState } from 'react'
import { Link,useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

   const [showMyModal,setShowMyModal] = useState(false);
   const handleOnClose = ()=>setShowMyModal(false);
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
      
          await axios
      .post("https://bookstore-v2-backend-web-app.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
            
  return (
    <>
   <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
  <div className="m-4 w-[400px] bg-white p-6 border-2 border-pink-400 rounded-2xl shadow-lg">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Title & Close Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-3xl">SignUp</h2>
        <Link to="/" className="font-bold text-xl text-black">X</Link>
      </div>

      {/* Name Field */}
      <div className="mb-4 flex flex-col">
        <p className="mb-2">Name</p>
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
        <p className="mb-2">Email</p>
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
        <p className="mb-2">Password</p>
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
        <button className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-300">SignUp</button>
        <p>
          Have an account?  
          <button onClick={() => setShowMyModal(true)}>
            <span className="text-blue-500 underline cursor-pointer">Login</span>
          </button>
        </p>
      </div>
    </form>
  </div>
  <Login onClose={handleOnClose} visible={showMyModal} />
</div>

    </>
  )
}

export default SignUp
