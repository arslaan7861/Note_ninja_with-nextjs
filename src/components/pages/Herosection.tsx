import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Herosection() {
  return (
    <section className="w-full md:h-auto max-h-[calc(100svh - 4rem)] pt-12 flex flex-col items-center justify-around">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className=" text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                {"Elevate Your Learning with ClassNotes"
                  .split("")
                  .map((t, i) => {
                    return (
                      <span key={i} className="typing_animate">
                        {t}
                      </span>
                    );
                  })}
              </h1>
              <p className="typing_animate max-w-[600px] text-muted-foreground md:text-xl ">
                {" Easily share, organize, and access your class notes with your classmates. Never miss a beat in your studies."
                  .split("")
                  .map((t, i) => {
                    return (
                      <span key={i} className="typing_animate">
                        {t}
                      </span>
                    );
                  })}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="call_to_acion_btn inline-flex h-10 items-center justify-center rounded-md bg-primary_color px-8 font-medium text-bg_primary"
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="call_to_acion_btn inline-flex  h-10 items-center justify-center rounded-md border border-primary_color font-bold px-8 shadow-sm text-primary_color"
              >
                Get notes
              </Link>
            </div>
          </div>
          <Image
            src="/images/heroImg.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="homepage_img mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
