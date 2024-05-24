"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const submit: SubmitHandler<commentFields> = async (data) => {};
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full flex items-start gap-3"
      >
        <textarea
          {...register("comment")}
          className="border resize-y h-max w-full shadow-md p-2"
        />
        <button
          type="submit"
          className="bg-primary_color hover:bg-secondary_color mt-2 text-white px-4 py-2 text-base text-center uppercase font-secondar w-full sm:w-min"
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
