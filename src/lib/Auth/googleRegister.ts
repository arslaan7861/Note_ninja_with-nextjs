import { Profile } from "next-auth";
import connectDB from "@/lib/DB/connectDB";
import User from "@/lib/DB/userSchema";

async function googleRegister(profile: Profile) {
  try {
    // await User.deleteMany({});
    const user = await User.findOne({ username: profile.email?.split("@")[0] });
    if (user) return { ...user, sub: user._id };
    const newUser = await User.create({
      username: profile.email?.split("@")[0],
      email: profile.email,
      accountProvider: "google",
      fullname: profile.name,
      completed: false,
    });
    return { ...newUser, id: newUser._id };
  } catch (error) {
    console.log(error);
  }
}

export default googleRegister;
