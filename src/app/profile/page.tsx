import Backbtn from "@/components/buttons/Backbtn";
import {
  ProfilePlaceholder,
  Book,
  HatAcademic,
  EmailIcon,
} from "@/components/icons/profile";
import Overlay from "@/components/wrapper/overlay";
import authOptions from "@/lib/Auth/authOPtions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <Overlay>
      <article className="bg-white relative p-6 w-5/6 md:w-1/3 max-w-sm mx-auto rounded-lg shadow-lg ">
        {!session ? (
          <div className="py-10 flex flex-col items-center gap-5">
            <p className="text-gray-700 capitalize">please signin first</p>
            <Link
              href={`/auth/signin`}
              className="w-full bg-primary_color text-center text-white px-4 py-2 rounded-md"
              replace
            >
              SIGNIN
            </Link>
          </div>
        ) : (
          <>
            <Backbtn Class=" absolute right-3 top-3 w-6 p-2 aspect-square ">
              <Image src="/icons/cross.svg" alt="back button" layout="fill" />
            </Backbtn>
            <article className="flex flex-col items-center gap-1">
              <header className="w-24 h-24">
                {user?.image ? (
                  <Image src={user.image} alt="Profile" fill />
                ) : (
                  <ProfilePlaceholder />
                )}
              </header>
              <h2 className="text-xl font-semibold mt-2 text-black">
                {user?.name}
              </h2>
              <p className="text-gray-700">@{user?.username}</p>
              <p className="text-gray-700 flex h-6 gap-2">
                <Book />
                {"B.tech(CSE) first year"}
              </p>
              <p className="text-gray-700 flex h-6 gap-2">
                <HatAcademic />
                {"second year"}
              </p>
              <p className="text-gray-700 flex h-6 gap-2">
                <EmailIcon />
                {user?.email}
              </p>
            </article>

            <footer className="mt-6 flex flex-col items-center space-y-4">
              <Link
                href={`/uploads/${user?.id}`}
                className="btn_primary w-full"
              >
                Uploads
              </Link>
              <section className="w-full flex justify-evenly gap-5">
                <button className="w-1/2 px-4 py-2 rounded-md border-2 border-black">
                  Edit Profile
                </button>

                <Link
                  href={"/api/auth/signout"}
                  className=" w-1/2 px-4 py-2 text-center rounded-md border-2 flex-grow border-red-600 text-red-700"
                >
                  Logout
                </Link>
              </section>
            </footer>
          </>
        )}
      </article>
    </Overlay>
  );
}

export default ProfilePage;

{
  /* <CustomLink path="/api/auth/signout">logout</CustomLink> */
}
