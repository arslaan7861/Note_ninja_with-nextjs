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
      <p className="text-lg gap-1 uppercase font-semibold flex items-center w-4/6 md:w-1/2">
        <span className="border border-gray-400 rounded-full h-0 flex-grow"></span>
        <span>or</span>
        <span className="border  border-gray-400 rounded-fullh-0 flex-grow"></span>
      </p>
      <section className="flex flex-col py-4 items-center gap-5">
        {children}
      </section>
    </div>
  );
}

export default Layout;
