"use server";
import authOptions from "@/lib/Auth/authOPtions";
import User from "@/lib/DB/userSchema";
import { getServerSession } from "next-auth";
import type { uploadType } from "@/types/uploads";
import Uploads from "@/lib/DB/noteSchema";
async function getUploads() {
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ username: session?.user.username });
  const uploads: string[] = user?.uploads;
  if (!uploads) return null;
  if (uploads.length <= 0) return null;
  const UserUploads: uploadType[] = [];
  for (let i = 0; i < uploads.length; i++) {
    const id = uploads[i];
    const up = await Uploads.findById(id);
    UserUploads.push(up);
  }
  return UserUploads.length !== 0 ? UserUploads : null;
}

export default getUploads;
