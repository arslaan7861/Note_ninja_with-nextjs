import React from "react";
import ProfileEditForm from "../forms/profileEditForm";
import { userType } from "@/types/types";
import Image from "next/image";
import Backbtn from "../buttons/Backbtn";

function ProfileEdit({ user }: { user: userType }) {
  const { username, email, name, image, id, completed } = user;
  return (
    <div className="bg-transBlack2 absolute top-0 h-svh w-screen items-center justify-center flex backdrop-blur-sm z-[100]">
      <article className="flex flex-col relative h-min gap-5 pb-10 p-4 rounded-lg w-9/12 lg:w-1/3 md:w-1/2 sm:w-2/3 bg-bg_primary shadow-lg border border-border_color items-center justify-start overflow-hidden">
        <Backbtn Class=" absolute right-2 top-2 w-8 sm:w-10 p-2 aspect-square ">
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
            className="h-full w-full"
          >
            <polygon
              points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
            />
          </svg>
        </Backbtn>
        <h3 className="">Complete your profile</h3>
        <ProfileEditForm
          username={username}
          email={email}
          name={name}
          image={image}
          id={id.toString()}
          completed={completed}
        ></ProfileEditForm>
      </article>
    </div>
  );
}

export default ProfileEdit;
