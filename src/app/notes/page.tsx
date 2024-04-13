import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const notes = ["note1", "note2", "note3", "note4", "note5", "note6", "note7"];
async function Note() {
  const sess = await getSession();
  console.log(sess);

  return (
    <>
      {notes.map((note) => {
        return (
          <Link
            className="bg-black px-4 py-2 text-white"
            href={`notes/${note}`}
            key={note}
          >
            {note}
          </Link>
        );
      })}
    </>
  );
}

export default Note;
