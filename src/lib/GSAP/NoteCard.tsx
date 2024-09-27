"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function AnimationsCard({ children }: { children: React.ReactNode }) {
  const card = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const animate = gsap.from("#info", { paused: true, y: "100%" });
    if (card.current) {
      card.current.onmouseenter = () => animate.play();
      card.current.onmouseleave = () => animate.reverse();
    }
  });
  return (
    <article
      ref={card}
      className="bg-card_color shadow-lg rounded-lg overflow-clip"
    >
      {children}
    </article>
  );
}

export default AnimationsCard;
