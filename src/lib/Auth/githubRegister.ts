import { Profile } from "next-auth";
import connectDB from "../DB/connectDB";
import User from "../DB/userSchema";

const GithubRegister = async (profile: Profile) => {
  await connectDB();
  // await User.deleteMany({});
  const user = await User.findOne({ username: profile.login });

  if (user) {
    // console.log({ gitid: user._id });
    return user;
  }
  const newUser = await User.create({
    username: profile.login,
    email: profile.email,
    accountProvider: "github",
    fullname: profile.name,
    image: profile.avatar_url,
    completed: false,
  });

  return newUser;
  // return true;
};

export default GithubRegister;
