"use client";
import Spinner from "@/components/loaders/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  username: z
    .string()
    .nonempty("Please enter username")
    .min(5, "Username must be 5 letters atleast"),
  password: z
    .string()
    .nonempty("Please enter password")
    .min(8, { message: "Password must be atleast 8 letters long" }),
});
type formFields = z.infer<typeof schema>;

function Login() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<formFields> = async (data) => {
    try {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        reset({ password: "" });
        const {
          path,
          message,
        }: { message: string; path: "username" | "password" } =
          await JSON.parse(res.error);
        setError(path, { message });
        return;
      }
      router.replace("/");
      router.refresh();
    } catch (error) {
      setError("root", { message: "something went wrong" });
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={handleSubmit(submit)}
    >
      <div className="flex flex-col w-min ">
        <input
          {...register("username")}
          type="text"
          className="p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          id="username"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 px-2 text-xs">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Password"
          {...register("password")}
          className="p-2 px-3 w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-500 px-2 text-xs">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black flex items-center justify-center w-56 disabled:bg-gray-950 text-white uppercase text-lg p-2 rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : "login"}
      </button>
      {errors.root && (
        <p className="text-red-500 px-2 text-xs">{errors.root.message}</p>
      )}
      <Link
        href="/auth/signin/register"
        replace={true}
        className="text-sm font-medium"
      >
        Don<sup>,</sup>t have an account ?{" "}
        <span className="font-semibold text-lg">Register</span>
      </Link>
    </form>
  );
}

export default Login;
