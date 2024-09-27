import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-svh relative z-10 w-screen p-4 pb-4 overflow-y-auto scrollbar-none">
      {/* serch bar  */}
      <section className="search__bar">
        <input type="text" placeholder="Search....." />
      </section>
      {children}
    </section>
  );
}

export default Layout;
