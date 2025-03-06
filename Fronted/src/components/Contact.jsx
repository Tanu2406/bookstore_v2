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
    <div className="max-w-lg mx-auto px-4 mt-10">
      {/* Contact Form Container */}
      <div className="bg-white p-6 border border-pink-300 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col text-left w-full">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("name", { required: "Please enter your name." })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col text-left w-full">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full"
              {...register("email", { required: "Please enter your email." })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col text-left w-full">
            <label htmlFor="message" className="mb-1 font-medium">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none w-full h-28 resize-none"
              {...register("message", { required: "Please enter your message." })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-300 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
