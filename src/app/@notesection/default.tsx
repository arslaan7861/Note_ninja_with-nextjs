import React from "react";
import type { uploadType } from "@/types/uploads";
import Uploads from "@/lib/DB/noteSchema";
import Upload from "@/components/cards/upload";

async function NotesSection() {
  const notes: uploadType[] = await Uploads.find({});
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

export default NotesSection;
