"use client";
import Link from "next/link";
import React from "react";

function ProfilePage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <Link href={"/api/test"}>home</Link>
    </div>
  );
}

export default ProfilePage;
