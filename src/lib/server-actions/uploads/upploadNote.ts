"use server";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";
import connectDB from "@/lib/DB/connectDB";
import User from "@/lib/DB/userSchema";
import Uploads from "@/lib/DB/noteSchema";
export interface fileDataType {
  webContentLink: string;
  webViewLink: string;
  fileId: string;
}
async function uploadNote(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);
    await connectDB();
    const user = await User.findOne({ username: session?.user.username });

    const subject = formData.get("subject") as string;
    const year = formData.get("year") as string;
    const fileId = formData.get("fileId") as string;
    const webViewLink = formData.get("webViewLink") as string;
    const webContentLink = formData.get("webContentLink") as string;

    const upload = await Uploads.create({
      year,
      subject,
      uploader: user.username,
      fileId,
      webContentLink,
      webViewLink,
    });
    await user.uploads.push(upload._id);
    await user.save();
    return JSON.stringify({ userID: user._id, fileId });
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export default uploadNote;
