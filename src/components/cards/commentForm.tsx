"use client";
import { UnauthenticatedError } from "@/lib/errors/auth";
import { postComment } from "@/lib/server-actions/postComment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  comment: z.string().nonempty("Please enter your comment"),
});
type commentFields = z.infer<typeof schema>;
function CommentForm({ noteId }: { noteId: string }) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
    watch,
  } = useForm<commentFields>({
    resolver: zodResolver(schema),
  });
  //!CREATE ROUTER
  const router = useRouter();
  //!GET USER SESSION
  const { data: session, status } = useSession();
  const submit: SubmitHandler<commentFields> = async (data) => {
    try {
      const resp: string = (await postComment({
        comment: data.comment,
        noteId,
      })) as string;
      if (!resp) setError("comment", { message: "somenthing went wrong" });
      console.log(JSON.parse(resp));
    } catch (error) {
      if (error instanceof UnauthenticatedError) router.push("/auth/signin");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full flex h-min items-center"
      >
        <input
          {...register("comment")}
          className="border h-max w-full shadow-md p-2 flex-grow rounded-l-full border-primary_color"
        />
        <button
          type="submit"
          className="bg-primary_color hover:bg-secondary_color text-white px-4 py-2 text-base text-center uppercase font-secondar w-full sm:w-min rounded-r-full border border-primary_color"
        >
          comment
        </button>
      </form>
      {errors.comment && (
        <p className="text-red-500 px-2 text-xs w-full">
          {errors.comment.message}
        </p>
      )}
      {errors.root && (
        <p className="text-red-500 px-2 text-xs w-full">
          {errors.root.message}
        </p>
      )}
    </>
  );
}

export default CommentForm;
