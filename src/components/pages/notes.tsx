import noteSchema from "@/lib/DB/noteSchema";
import React from "react";
import Upload from "../cards/upload";
import connectDB from "@/lib/DB/connectDB";
import { uploadType } from "@/types/types";

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
      })}{" "}
      {notes?.reverse().map((upload) => {
        return <Upload uploadData={upload} key={upload.fileId} />;
      })}{" "}
      {notes?.reverse().map((upload) => {
        return <Upload uploadData={upload} key={upload.fileId} />;
      })}
    </>
  );
}

export default NotesPage;
