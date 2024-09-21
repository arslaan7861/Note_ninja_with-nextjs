"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ProfileLabel from "../buttons/profileLabel";
import { userType } from "@/types/types";

const schema = z.object({
  image: z.any(),
  name: z.string().nonempty("Please enter your fullname"),
  email: z.string().nonempty("Please enter email"),
  course: z.string().nonempty("Please enter your course"),
  year: z.string().nonempty("Please enter your course"),
});
type commentFields = z.infer<typeof schema>;
function ProfileEditForm({ username, email, name, image }: userType) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm<commentFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      image,
      name,
      email,
    },
  });
  //!CREATE ROUTER
  const router = useRouter();
  const submit: SubmitHandler<commentFields> = async (data) => {
    console.log({ data });
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-min flex flex-col h-full items-center gap-4 px-2"
    >
      <ProfileLabel username={username} imageUrl={image} />
      {errors.image && (
        <p className="text-red-500 px-2 text-xs w-full">
          <>{errors.image?.message}</>
        </p>
      )}

      <input
        id="profile"
        type="file"
        multiple={false}
        className="hidden"
        accept="image/*"
        {...register("image")}
      />
      <div className="flex flex-col w-min ">
        <input
          {...register("name")}
          placeholder="Fullname..."
          className="input_basic"
        />
        {errors.name && (
          <p className="text-red-500 px-2 text-xs w-full">
            <>{errors.name?.message}</>
          </p>
        )}
      </div>
      <div className="flex flex-col w-min ">
        <input
          {...register("course")}
          placeholder="Course..."
          className="input_basic"
        />
        {errors.course && (
          <p className="text-red-500 px-2 text-xs w-full">
            <>{errors.course?.message}</>
          </p>
        )}
      </div>
      <div className="flex flex-col w-min ">
        <input
          {...register("year")}
          placeholder="Year..."
          className="input_basic"
        />
        {errors.year && (
          <p className="text-red-500 px-2 text-xs w-full">
            <>{errors.year?.message}</>
          </p>
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
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-primary_color w-56 hover:bg-secondary_color text-white p-2 px-4 text-base text-center uppercase font-secondar rounded-lg border border-primary_color flex-grow-0 disabled:bg-secondary_color mt-3"
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </form>
  );
}

export default ProfileEditForm;
