"use client";
import { useRouter } from "next/navigation";
import React from "react";
type proptype = {
  Class: string;
  children: React.JSX.Element;
};
function Backbtn({ children, Class }: proptype) {
  const router = useRouter();
  return (
    <button onClick={router.back} className={Class}>
      {children}
    </button>
  );
}

export default Backbtn;
