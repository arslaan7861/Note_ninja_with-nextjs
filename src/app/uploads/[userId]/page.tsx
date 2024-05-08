import UploadButton from "@/components/buttons/UploadButton";
import Upload from "@/components/cards/upload";
import getUploads from "@/lib/server-actions/uploads/getUploads";
import { uploadType } from "@/types/uploads";
import Link from "next/link";
import React, { useEffect, useState } from "react";
type propsType = {
  params: {
    userId: string;
  };
};
export const dynamic = "force-dynamic";

async function Uploads({ params }: propsType) {
  const uploads: uploadType[] | null = await getUploads(params.userId);

  return (
    <div className="h-screen w-screen pt-16 flex flex-col ">
      <UploadButton></UploadButton>
      <h3 className="text-center text-xl uppercase font-bold p-2 ">uploads</h3>
      {!uploads ? (
        <Link
          href={"uploads/upload"}
          className="flex-grow flex items-center justify-center text-3xl sm:text-5xl uppercase text-center text-gray-400 font-bold flex-col"
        >
          <span>tap to upload</span>
          <span className="text-base">
            {" "}
            you have not uploaded any notes yet
          </span>
        </Link>
      ) : (
        <section className=" grid grid-cols-1 sm:grid-cols-2 auto-rows-min md:grid-cols-3 p-4 gap-4 flex-grow">
          {uploads?.reverse().map((upload) => {
            return <Upload uploadData={upload} key={upload.fileId} />;
          })}
        </section>
      )}
    </div>
  );
}

export default Uploads;
