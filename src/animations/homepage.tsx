"use client";
import { ReactRef, useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

function HomepageAnimations({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
    // ! HERO SECTION ANIMATIONS
    gsap.from(".typing_animate", {
      y: "100%",
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.05,
      duration: 0.05,
    });
    gsap.from(".call_to_acion_btn", {
      x: "-60vw",
      ease: "power2.out",
      duration: 1,
    });

    // !FEATURES ANIMATIONS
    gsap.utils.toArray(".featuresHeadings").forEach((e) => {
      gsap.from(e as HTMLElement, {
        scrollTrigger: {
          trigger: e as HTMLElement,
          start: "25% 90%",
          end: "top center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        y: "120%",
        opacity: 0.0,
        duration: 0.5,
        ease: "power1.out",
      });
    });
    gsap.utils.toArray([".features_desc", ".homepage_img"]).forEach((e) => {
      gsap.from(e as HTMLElement, {
        scrollTrigger: {
          trigger: e as HTMLElement,
          start: "center 90%",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        x: "120%",
        opacity: 0.0,
        duration: 0.5,
        ease: "power1.out",
      });
    });
  });
  return <div>{children}</div>;
}

export default HomepageAnimations;
