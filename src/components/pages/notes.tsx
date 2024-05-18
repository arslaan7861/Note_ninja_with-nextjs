import noteSchema from "@/lib/DB/noteSchema";
import { uploadType } from "@/types/uploads";
import React from "react";
import Upload from "../cards/upload";

interface propsType {
  searchQuery?: string;
}
async function NotesPage({ searchQuery }: propsType) {
  const notes: uploadType[] = await noteSchema.find({});
  return (
    <section className="notes__sec">
      {/* serch bar  */}
      <section className="search__bar">
        <input type="text" placeholder="Search....." />
      </section>

      {notes?.reverse().map((upload) => {
        return <Upload uploadData={upload} key={upload.fileId} />;
      })}
    </section>
  );
}

export default NotesPage;
