import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-20 flex flex-col items-center gap-2">{children}</div>
  );
}

export default layout;
