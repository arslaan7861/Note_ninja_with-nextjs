import NotesPage from "@/components/pages/notes";

import React, { Suspense } from "react";
async function Note() {
  return (
    <div className=" snap-center h-max relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 auto-rows-min md:grid-cols-3 lg:grid-cols-4 pt-4 gap-4 px-0">
      <Suspense fallback={<>loading</>}>
        <NotesPage />
      </Suspense>
    </div>
  );
}

export default Note;
