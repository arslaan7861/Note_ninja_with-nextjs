"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const schema = z
  .object({
    username: z
      .string()
      .nonempty("please enter username")
      .min(5, "username must be 5 letters atleast"),
    email: z
      .string()
      .nonempty("please enter email")
      .email({ message: "enter a valid email" }),
    password: z
      .string()
      .min(8, { message: "password must be atleast 8 letters long" }),
    confirmPass: z
      .string()
      .min(8, { message: "password must be atleast 8 letters long" }),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "passwords do not match",
    path: ["confirmPass"],
  });
type formFields = z.infer<typeof schema>;

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<formFields> = (data) => {
    console.log(data);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col w-min ">
        <input
          {...register("username")}
          type="text"
          className="p-1 sm:p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          id="username"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 px-2 text-xs">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col w-min ">
        <input
          {...register("email")}
          type="email"
          className="p-1 sm:p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 px-2 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Password"
          {...register("password")}
          className="p-1 sm:p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-500 px-2 text-xs">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="confirm password"
          {...register("confirmPass")}
          className="p-1 sm:p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
          id="password"
        />
        {errors.confirmPass && (
          <p className="text-red-500 px-2 text-xs">
            {errors.confirmPass.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white uppercase text-lg p-2 rounded-md"
      >
        register
      </button>
      <Link href="/auth/signin" className="text-sm font-medium">
        Already have an account ?{" "}
        <span className="font-semibold text-lg">Signin</span>
      </Link>
    </form>
  );
}

export default Login;
