"use client";
import React from "react";
import Signinbutton from "@/components/buttons/Loginbutton";

function Signin() {
  return (
    <>
      <Signinbutton
        callbackUrl="/"
        provider="github"
        redirect
        key={"github"}
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
