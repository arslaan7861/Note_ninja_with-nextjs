import React from "react";

function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: never;
}) {
  return (
    <div className="pt-20 flex flex-col items-center gap-2">
      {children}
      <section>{modal}</section>
    </div>
  );
}

export default layout;
