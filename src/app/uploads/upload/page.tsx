"use client";
import Spinner from "@/components/loaders/spinner";
import noteStructure, { subjectType } from "@/lib/noteSchema";
import uploadNote, {
  fileDataType,
} from "@/lib/server-actions/uploads/upploadNote";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  note: z.any(),
  year: z
    .string()
    .optional()
    .refine((course) => course, "please select year"),
  unit: z
    .string()
    .optional()
    .refine((course) => course, "please select unit"),
  subject: z
    .string()
    .optional()
    .refine((subject) => subject, "please select suject"),
});
type formFields = z.infer<typeof schema>;
function UploadPage() {
  const [subjects, setSubjects] = useState<subjectType[] | undefined>();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
    watch,
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<formFields> = async (data) => {
    try {
      //! validate subject
      const validSub = noteStructure[
        data.year as "first" | "second" | "third" | "fourth"
      ].find((sub) => {
        return sub.code === data.subject?.split(")")[0].split("(")[1];
      });
      if (!validSub)
        return setError("subject", { message: "please select a subject" });

      //! PARSE FILE
      const MAX_UPLOAD_SIZE = 1024 * 1024 * 50; // 3MB
      const ACCEPTED_FILE_TYPES = ["application/pdf"];
      if (data.note.length === 0)
        return setError("note", { message: "please select a file" });
      if (!ACCEPTED_FILE_TYPES.includes(data.note[0].type))
        return setError("note", { message: "only pdf file are supported" });
      if (data.note[0].size > MAX_UPLOAD_SIZE)
        return setError("note", { message: "maximum size 50mb" });
      // ! UPLOAD NOTE
      const formData = new FormData();
      const file: File = data.note[0] as File;
      formData.append("file", file);
      const { data: fileres }: { data: fileDataType } = await axios.post(
        "https://drive-upload-api.onrender.com",
        formData
      );
      console.log(fileres);
      formData.delete("file");
      formData.set("fileId", fileres.fileId);
      formData.set("webViewLink", fileres.webViewLink);
      formData.set("webContentLink", fileres.webContentLink);
      formData.append("subject", data.subject as string);
      formData.append("year", data.year as string);
      formData.append("unit", data.unit as string);

      const resp: string | undefined = await uploadNote(formData);
      if (!resp)
        return setError("root", { message: "seomthing went please try again" });
      const fileData = JSON.parse(resp) as { userID: string; fileId: string };
      router.replace(`/uploads/${fileData.userID}`);
      router.refresh();
    } catch (error) {
      setError("root", { message: "seomthing went please try again" });
    }
  };
  const year = watch("year") as "first" | "second" | "third" | "fourth";
  useEffect(() => {
    setSubjects(() => {
      return noteStructure[year];
    });
  }, [year]);

  return (
    <form
      className="flex flex-col w-screen h-svh justify-center items-center gap-4"
      onSubmit={handleSubmit(submit)}
    >
      <div className="flex flex-col w-min ">
        <input
          id="dropzone-file"
          {...register("note")}
          type="file"
          className="file:p-2 file:border-none file:bg-black file:text-white w-56 bg-gray-300 outline-none rounded-lg placeholder:text-gray-500"
          multiple={false}
          accept="application/pdf"
        />
        {errors.note && (
          <p className="text-red-500 px-2 text-xs">{`${errors.note.message}`}</p>
        )}
      </div>
      <div className="flex flex-col w-min ">
        <select id="year" {...register("year")}>
          <option value={""}>select year</option>
          <option value={"first"}>first year</option>
          <option value={"second"}>second year</option>
          <option value={"third"}>third year</option>
          <option value={"fourth"}>fourth year</option>
        </select>
        {errors.year && (
          <p className="text-red-500 px-2 text-xs">{`${errors.year.message}`}</p>
        )}
      </div>
      <div className="flex flex-col w-min ">
        <select id="unit" {...register("unit")}>
          <option value={""}>select unit</option>
          <option value={"1"}>unit 1</option>
          <option value={"2"}>unit 2</option>
          <option value={"3"}>unit 3</option>
          <option value={"4"}>unit 4</option>
          <option value={"5"}>unit 5</option>
        </select>
        {errors.unit && (
          <p className="text-red-500 px-2 text-xs">{`${errors.unit.message}`}</p>
        )}
      </div>

      <div className="flex flex-col w-min ">
        <select id="subject" {...register("subject")}>
          <option value={""}>select subject</option>
          {!!subjects &&
            subjects.map((sub, index) => {
              return (
                <option
                  key={index + sub.code}
                  value={`${sub.subject} (${sub.code})`}
                >
                  {sub.subject} ({sub.code})
                </option>
              );
            })}
        </select>
        {errors.subject && (
          <p className="text-red-500 px-2 text-xs">{`${errors.subject.message}`}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black flex items-center justify-center w-56 disabled:bg-gray-950 text-white uppercase text-lg p-2 rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : "upload"}
      </button>

      {errors.root && (
        <p className="text-red-500 px-2 text-xs">{errors.root.message}</p>
      )}
      {/* {!errors.root && !!message && (
        <p className="text-red-500 px-2 text-xs">{message}</p>
      )} */}
    </form>
  );
}

export default UploadPage;
