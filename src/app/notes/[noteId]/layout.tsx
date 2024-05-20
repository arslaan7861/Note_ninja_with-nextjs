import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full py-5 border grid grid-cols-3 lg:grid-cols-5 gap-5">
      {children}
    </div>
  );
}

export default Layout;
