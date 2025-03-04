import {React,useEffect }from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = ( {visible,onClose}) => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    // if(!visible) return null;
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

      const onSubmit = async(data)=>{
        const userInfo={
          email:data.email,
          password:data.password,
        };
        await axios.post("http://localhost:4001/user/login",userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
           
            toast.success('Login successfully');
            // navigate(from, { replace: true });
           
            setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("User", JSON.stringify(res.data.user));
           
            },1000);
           
          }
          
        }).catch((err)=>{
          if(err.response){
            console.log(err)
            toast.error("Error:"+err.response.data.message);
            setTimeout(()=>{},2000);
          }
          
        })
      }
      if (!visible) {
        return <></>; 
      }
  return (
    <>
   <div className='fixed inset-0 bg-opacity-1 backdrop-blur-sm flex justify-center items-center z-50'>
   <div className='m-4 container w-auto h-[85]  bg-white  p-4 border border-pink-300 rounded-2xl '>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex justify-between mb-4'>
    <h2 className="font-bold text-3xl">Login</h2>
    <button className='font-bold text-xl text-black ' onClick={onClose}> X </button>
   
    </div>

      <div className='mb-4 flex justify-start items-start flex-col'>
        <p className='mb-2 ' >Email</p>
        <input id='email' type='email' placeholder='Enter your email' className=' px-2 py-1 border w-80  border-gray-300 rounded-md outline-none' {...register('email', { required: true })}></input>
        {errors.email && <p className='text-red-500 text-sm mt-1'>Please enter your email.</p>}
      </div>
      <div className='mb-4 flex justify-start items-start flex-col'>
        <p className='mb-2'>Password</p>
        <input id='password' type='text' placeholder='Enter your password' className=' px-2 py-1 border w-80  border-gray-300 rounded-md outline-none' {...register('password', { required: true })}></input>
        {errors.password && <p className='text-red-500 text-sm mt-1'>Please enter your password.</p>}
      </div>
      <div className='flex justify-around mb-2 '>
      <button className="mt-4 mb-4 !bg-pink-400 text-white px-6 py-2 rounded-lg hover:!bg-pink-300">Login</button>
      <p className='mt-6'>Not register?<Link to="/signup"><span  className='text-blue-500 underline cursor-pointer'>SignUp</span></Link></p>
      </div>
      </form>
    </div>
   </div>
    </>
  )
}

export default Login
