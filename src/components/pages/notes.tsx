import noteSchema from "@/lib/DB/noteSchema";
import { uploadType } from "@/types/uploads";
import React from "react";
import Upload from "../cards/upload";
import connectDB from "@/lib/DB/connectDB";

interface propsType {
  searchQuery?: string;
}
async function NotesPage({ searchQuery }: propsType) {
  await connectDB();
  const notes: uploadType[] = await noteSchema.find({});
  return (
    <>
      {notes?.reverse().map((upload) => {
        return <Upload uploadData={upload} key={upload.fileId} />;
      })}
    </>
  );
}

export default NotesPage;
