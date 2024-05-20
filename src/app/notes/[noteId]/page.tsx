import Upload from "@/components/cards/upload";
import connectDB from "@/lib/DB/connectDB";
import noteSchema from "@/lib/DB/noteSchema";
import userSchema from "@/lib/DB/userSchema";
import { uploadType } from "@/types/uploads";
import Image from "next/image";
import React from "react";
type propsType = {
  params: {
    noteId: string;
  };
};

async function page({ params }: propsType) {
  await connectDB();
  const note: uploadType = await noteSchema.findById(params.noteId);

  return (
    <section className=" shrink-0 h-64  text-txtclr relative overflow-hidden z-10 flex items-center gap-2 col-span-3 rounded-md hover:bg-transBlack bg-card_color text-text_color shadow-md">
      <section className="relative w-36 h-full shrink-0">
        <Image src={"/images/book.jpg"} fill alt="book cover page" />
      </section>
      <section className="flex-grow flex flex-col py-4 p-2 justify-center gap-2 ">
        <h2 className=" font-bold uppercase">unit 1</h2>
        <h4 className="text-ellipsis capitalize w-full font-semibold  line-clamp-1">
          {note.subject}
        </h4>
        <h4 className="text-ellipsis capitalize w-full font-semibold  line-clamp-1">
          {note.year} year
        </h4>
        <h5 className="text-ellipsis text-secondary_text break-all font-semibold w-full  line-clamp-1">
          uploaded: {note.uploader}
        </h5>
        <a
          href={note.webContentLink}
          className="bg-primary_color hover:bg-secondary_color mt-2 text-white px-4 py-2 text-base text-center uppercase font-secondary"
        >
          download
        </a>
      </section>
    </section>
  );
}

export default page;
