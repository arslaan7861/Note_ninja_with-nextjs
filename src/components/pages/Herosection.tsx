"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Herosection() {
  useGSAP(() => {
    gsap.from(".animate_form_bottom", {
      y: "100%",
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.01,
      duration: 0.5,
    });
  });
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32 flex flex-col items-center h-screen">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate_form_bottom">
                Elevate Your Learning with ClassNotes
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate_form_bottom">
                Easily share, organize, and access your class notes with your
                classmates. Never miss a beat in your studies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary_color px-8 text-sm font-medium text-bg_primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Log In
              </Link>
            </div>
          </div>
          <Image
            src="/images/heroImg.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
