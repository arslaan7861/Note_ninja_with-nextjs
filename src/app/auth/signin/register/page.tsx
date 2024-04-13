"use client";
import React from "react";
import Signinbutton from "@/components/buttons/Loginbutton";
import Image from "next/image";

function Signin() {
  return (
    <>
      <Signinbutton
        callbackUrl="/"
        provider="github"
        redirect
        key={"github"}
        bg="black"
        imgUrl="/images/github.svg"
      ></Signinbutton>
      <Signinbutton
        callbackUrl="/"
        provider="google"
        redirect
        key={"google"}
        imgUrl="/images/google.png"
      ></Signinbutton>
    </>
  );
}

export default Signin;
