"use server";
import axios from "axios";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";
import connectDB from "@/lib/DB/connectDB";
import User from "@/lib/DB/userSchema";
import Uploads from "@/lib/DB/noteSchema";
interface fileDataType {
  webContentLink: string;
  webViewLink: string;
  fileId: string;
}
async function uploadNote(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);
    await connectDB();
    const user = await User.findOne({ username: session?.user.username });
    const { data: fileData }: { data: fileDataType } = await axios.post(
      process.env.DRIVE_UPLOAD_URL as string,
      formData
    );
    const subject = formData.get("subject") as string;
    const year = formData.get("year") as string;

    const { fileId, webContentLink, webViewLink } = fileData;

    const upload = await Uploads.create({
      year,
      subject,
      uploader: user.username,
      fileId,
      webContentLink,
      webViewLink,
    });
    console.log(upload);
    await user.uploads.push(upload._id);
    await user.save();
    console.log(user);

    // return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default uploadNote;
