"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError, AxiosResponse } from "axios";

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
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<formFields> = async (dat) => {
    try {
      const res: AxiosResponse<any, any> | void = await axios.post(
        "/api/auth/register",
        dat,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(res?.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          message,
          path,
        }: { message: string; path: "username" | "password" | "email" } =
          error.response?.data;
        setError(path, { message });
      } else {
        console.log(error);
        setError("root", { message: "internal server error" });
      }
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col w-min ">
        <input
          {...register("username")}
          type="text"
          className="p-1 sm:p-2  px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
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
          className="p-1 sm:p-2  px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
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
          className="p-1 sm:p-2  px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 px-2 text-xs">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="confirm password"
          {...register("confirmPass")}
          className="p-1 sm:p-2  px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
        />
        {errors.confirmPass && (
          <p className="text-red-500 px-2 text-xs">
            {errors.confirmPass.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black disabled:bg-gray-950 text-white uppercase text-lg p-2 rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? "registering" : "register"}
      </button>
      {errors.root && (
        <p className="text-red-500 px-2 text-xs">{errors.root.message}</p>
      )}
      <Link href="/auth/signin" replace className="text-sm font-medium">
        Already have an account ?{" "}
        <span className="font-semibold text-lg">Signin</span>
      </Link>
    </form>
  );
}

export default Login;
