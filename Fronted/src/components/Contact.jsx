import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center w-full py-10 px-4">
      {/* Contact Form Container */}
      <div className="bg-white p-6 md:p-10 border border-pink-300 rounded-2xl shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>

        {/* Form - Single Column Layout */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Name Input */}
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("name", { required: "Please enter your name." })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("email", { required: "Please enter your email." })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 font-medium">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full h-32 resize-none"
              {...register("message", { required: "Please enter your message." })}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
