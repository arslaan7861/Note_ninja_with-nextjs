import NoteCardAnimations from "@/animations/NoteCard";
import NotesPage from "@/components/pages/notes";
import React, { Suspense } from "react";
async function Note() {
  return (
    <div className="w-screen grid grid-cols-1 sm:grid-cols-2 auto-rows-min md:grid-cols-3 lg:grid-cols-4 pt-4 gap-4 px-0">
      <Suspense fallback={<>loading</>}>
        <NoteCardAnimations />
        <NotesPage />
        <NotesPage /> <NotesPage /> <NotesPage />
      </Suspense>
    </div>
  );
}

export default Note;
