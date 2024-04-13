import React from "react";

function Layout({
  children,
  credentials,
}: {
  children: React.ReactNode;
  credentials: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <section className="h-min py-4 md:w-1/3 w-2/3 flex items-center justify-center">
        {credentials}
      </section>
      <p className="text-lg uppercase font-semibold">
        or <span></span>
      </p>
      <section className="flex flex-col items-center gap-5">{children}</section>
    </div>
  );
}

export default Layout;
