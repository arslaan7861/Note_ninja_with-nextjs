import Link from "next/link";
import React from "react";
const notes = ["note1", "note2", "note3", "note4", "note5", "note6", "note7"];
function Page() {
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
      <section className="notes__sec">
        {/* serch bar  */}
        <section className="search__bar">
          <input type="text" placeholder="Search....." />
        </section>
        {notes.map((note) => {
          return (
            <Link
              className="bg-black px-4 py-2 text-white"
              href={`/${note}`}
              key={note}
            >
              {note}
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Page;
