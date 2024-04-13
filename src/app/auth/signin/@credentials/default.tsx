"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type formFields = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<formFields>();
  const submit: SubmitHandler<formFields> = (data) => {
    console.log(data);
    signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/",
      redirect: true,
    });
    reset();
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col w-min ">
        <input
          {...register("username")}
          type="text"
          className="p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          id="username"
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Password"
          {...register("password")}
          className="p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
          id="password"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white uppercase text-lg p-2 rounded-md"
      >
        login
      </button>
      <Link href="/auth/signin/register" className="text-sm font-medium">
        Don<sup>,</sup>t have an account ?{" "}
        <span className="font-semibold text-lg">Register</span>
      </Link>
    </form>
  );
}

export default Login;
