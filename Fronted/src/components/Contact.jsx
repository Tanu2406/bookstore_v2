import React from 'react'
import { useForm } from 'react-hook-form';
import { Link} from 'react-router-dom'

const Contact = () => {
   const {
             register,
             handleSubmit,
             formState: { errors },
           } = useForm();
  return (
   <>
   
   <div className=' max-w-screen-2xl container mx-auto mr-2 ml-2 '>
   <div className='mt-4 mb-0 items-center justify-center text-center  bg-white  p-4 border border-pink-300 rounded-2xl '>
    <form onSubmit={handleSubmit((data) => console.log(data))} className='flex  flex-col justify-center items-center'>
    <div className='flex justify-between mb-4'>
    <h2 className="font-bold text-3xl">Contact Us</h2>
  
    </div>

    <div className='mb-4 flex justify-start items-start flex-col'>
        <p className='mb-2 ' >Name</p>
        <input id='name' type='text' placeholder='Enter your name' className=' px-2 py-1 border w-96  border-gray-300 rounded-md outline-none' {...register('name', { required: true })}></input>
        {errors.name && <p className='text-red-500 text-sm mt-1'>Please enter your name.</p>}
      </div>
      <div className='mb-4 flex justify-start items-start flex-col'>
        <p className='mb-2 ' >Email</p>
        <input id='email' type='email' placeholder='Enter your email' className=' px-2 py-1 border w-96  border-gray-300 rounded-md outline-none' {...register('email', { required: true })}></input>
        {errors.email && <p className='text-red-500 text-sm mt-1'>Please enter your email.</p>}
      </div>
      <div className='mb-4 flex justify-start items-start flex-col'>
        <p className='mb-2'>Message</p>
        <textarea  id='message' type='text' placeholder='Enter your message' className=' px-2 pt-1 border w-96 h-[80px] border-gray-300 rounded-md outline-none  placeholder:text-top ' {...register('password', { required: true })}></textarea>
        {errors.message && <p className='text-red-500 text-sm mt-1'>Please enter your message.</p>}
      </div>
      <div className='flex justify-between mb-2 '>
      <button className="mt-4 mb-4 !bg-pink-400 text-white px-6 py-2 rounded-lg hover:!bg-pink-300">Submit</button>
     
      </div>
      </form>
    </div>
   
   </div>
   
   </>
  )
}

export default Contact
