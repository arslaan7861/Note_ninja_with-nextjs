import Link from "next/link";
import React, { Suspense } from "react";
import type { uploadType } from "@/types/uploads";
import Uploads from "@/lib/DB/noteSchema";
import Upload from "@/components/cards/upload";
import NotesPage from "@/components/pages/notes";
async function Page() {
  // const notes: uploadType[] = await Uploads.find({});
  return (
    <div className="parallax__cont">
      <section className="hero__sec">
        <article
          id="hero-txt"
          className="h-full w-full flex  flex-col justify-center items-center md:w-1/2"
        >
          <section>
            <h1 className="sm:text-3xl text-2xl md:items-start capitalize w-full gap-3 items-center flex flex-col">
              share your class notes with
              <span className="sm:text-6xl  text-4xl font-bold uppercase text-primary">
                note ninja
              </span>
              <Link
                href={"/profile"}
                className="uppercase  text-sm sm:text-xl bg-primary px-4 py-2 text-txtbtn font-semibold"
              >
                tap to Upload
              </Link>
            </h1>
          </section>
        </article>
      </section>
      <Suspense fallback={<>loading</>}>
        <NotesPage />
      </Suspense>
    </div>
  );
}

export default Page;
