"use client";
import { postComment } from "@/lib/server-actions/comments/postComment";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const submit: SubmitHandler<commentFields> = async (data) => {
    try {
      const resp: { status: number; msg: string } = JSON.parse(
        (await postComment({
          comment: data.comment,
          noteId,
        })) as string
      );
      if (!resp) throw new Error();
      if (resp.status == 401) router.push("/auth/signin");
      if (resp.status == 201) router.refresh();
      reset({ comment: "" });
    } catch (error) {
      setError("comment", { message: "somenthing went wrong" });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full flex h-min items-center gap-2"
      >
        <input
          {...register("comment")}
          placeholder="comment..."
          className="h-max w-full p-2 placeholder:text-secondary_text bg-gray-300 flex-grow rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-primary_color hover:bg-secondary_color text-white sm:w-min p-2 px-4 text-base text-center uppercase font-secondar rounded-lg border border-primary_color flex-grow-0 disabled:bg-secondary_color"
        >
          {isSubmitting ? "commenting" : "comment"}
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
