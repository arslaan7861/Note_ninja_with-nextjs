import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <center className="min-h-svh z-10 w-full p-4 pt-10">
        {/* serch bar  */}
        <section className="search__bar">
          <input type="text" placeholder="Search....." />
        </section>
        {children}
      </center>
    </>
  );
}

export default Layout;
