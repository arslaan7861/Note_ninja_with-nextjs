"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

function FeaturesSection() {
  return (
    <section
      id="features_sec"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="featuresHeadings inline-block rounded-lg  px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="featuresHeadings text-3xl font-bold tracking-tighter sm:text-5xl">
              Streamline Your Study Workflow
            </h2>
            <p className="featuresHeadings max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ClassNotes provides the tools you need to stay organized and
              connected with your classmates. Upload, share, and access your
              notes with ease.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/heroImg.jpg"
            // id="desc_img"
            width="550"
            height="310"
            alt="Image"
            className="features_desc block mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <article className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="features_desc grid gap-1">
                  <h3 className=" text-xl font-bold">Easy Uploads</h3>
                  <p className=" text-muted-foreground">
                    Quickly upload your handwritten or digital notes with our
                    user-friendly interface.
                  </p>
                </div>
              </li>
              <li>
                <div className="features_desc grid gap-1">
                  <h3 className=" text-xl font-bold">Seamless Sharing</h3>
                  <p className=" text-muted-foreground">
                    Share your notes with your classmates and collaborate on
                    study materials.
                  </p>
                </div>
              </li>
              <li>
                <div className="features_desc grid gap-1">
                  <h3 className=" text-xl font-bold">Organized Notes</h3>
                  <p className=" text-muted-foreground">
                    Categorize your notes by class, topic, or date for easy
                    retrieval.
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
