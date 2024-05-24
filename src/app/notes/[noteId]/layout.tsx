import CommentForm from "@/components/cards/commentForm";
import CommentSkeletons from "@/components/loaders/comment";
import NotesPage from "@/components/pages/notes";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VIEWING NOTE",
};

function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    noteId: string;
  };
}) {
  return (
    <div className="w-full py-5 grid grid-cols-3 md:max-h-[150%] md:grid-cols-5 gap-5 grid-rows-sm md:grid-rows-md items-start">
      {children}
      <aside className="col-span-3 h-full row-span-2 md:col-span-2 flex flex-col overflow-auto">
        <h4 className="px-2capitalize font-semibold">Recommendations</h4>
        <section className="sidebar-cont custom_scrollbar">
          <NotesPage />
        </section>
      </aside>
      <section className="row-span-1 col-span-3 h-min md:h-full flex flex-col items-center gap-2">
        <h4 className="px-2capitalize font-semibold w-full">Comments</h4>
        <CommentForm noteId={params.noteId} />
        <article className="h-min w-full border border-border_color bg-white rounded-md md:flex-grow overflow-auto flex flex-col items-center gap-4 p-4">
          <CommentSkeletons />
        </article>
      </section>
    </div>
  );
}

export default Layout;
