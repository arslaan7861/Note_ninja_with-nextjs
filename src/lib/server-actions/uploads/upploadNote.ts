"use server";
import axios from "axios";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";
async function uploadNote(formData: FormData) {
  try {
    // const session = await getServerSession(authOptions);
    // console.log(session);

    const res = await axios.post(
      process.env.DRIVE_UPLOAD_URL as string,
      formData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default uploadNote;
