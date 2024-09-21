"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function NavbarAnimations({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    gsap.from("#navbar", {
      y: "-100%",
      duration: 0.7,
      ease: "bounce.in",
    });
  });
  return <>{children}</>;
}

export default NavbarAnimations;
