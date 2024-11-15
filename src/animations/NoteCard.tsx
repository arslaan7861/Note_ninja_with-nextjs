"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

function NoteCardAnimations() {
  useGSAP(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

    // !FEATURES ANIMATIONS
    gsap.utils.toArray(".note_card").forEach((e, i) => {
      gsap.from(e as HTMLElement, {
        scrollTrigger: {
          trigger: e as HTMLElement,
          start: "center 90%",
          end: "bottom center",
          toggleActions: "play none none reverse",
          //   scroller: "#note_scroller",
          markers: true,
        },
        x: i % 2 == 0 ? "-120%" : "120%",
        opacity: 0.3,
        scale: 0.6,
        // ease: "power1.out",
      });
    });
  });
  return <></>;
}

export default NoteCardAnimations;
