"use server";
import User from "@/lib/DB/userSchema";
import Uploads from "@/lib/DB/noteSchema";

async function getUploads(userId: string) {
  console.log("getting uploads");
  const user = await User.findById(userId);
  const UserUploads = await Uploads.find({ uploader: user.username });
  return UserUploads.length !== 0 ? UserUploads : null;
}

export default getUploads;
