import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import {Link} from 'react-router-dom'

const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  const registerHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };

  return (
    <div className="min-h-screen block items-center relative justify-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className=" border w-1/4 rounded-2xl overflow-hidden absolute top-[20%] left-[37%] flex gap-5 flex-col items-center justify-center"
      >
        <div className="w-full h-[10%] bg-blue-700 text-xl p-3  rounded-b-2xl">
          Login
        </div>
        <div className="w-full p-5">
          <input
            {...register("username")}
            className="border-b  mt-2 w-full text-xl block p-3"
            type="text"
            placeholder="john doe"
          />
          <input
           {...register("email")}
            type="email"
            className="border-b text-xl w-full  mt-2 block p-3"
            placeholder="JohnDoe@gmail.com"
          />
          <input
           {...register("password")}
            type="password"
            className="border-b text-xl mt-2 w-full  block p-3"
            placeholder="**********"
          />
        </div>
        <button className="text-xl px-5 cursor-pointer py-2 bg-gray-700 mb-2 rounded-xl">
          Register
        </button>
        <label className="text-gray-500">Already Have An Account ?  <Link className="text-blue-500" to='/login'>Login</Link> </label>
        
      </form>
    </div>
  );
};

export default Register;
