import connectDB from "@/lib/DB/connectDB";
import User from "@/lib/DB/userSchema";
import bcrypt from "bcryptjs";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";
type userType = {
  password: string;
  username: string;
  email: string;
  confirmPass: string;
};

export async function POST(req: Request) {
  try {
    console.log("registering");
    await connectDB();
    const data: userType = await req.json();
    data.password = await bcrypt.hash(data.password, 10);
    const user = await User.create(data);

    return Response.json({ username: user.username, ok: true });
  } catch (error: any) {
    console.log(error);
    // if (error instanceof MongooseError) console.log(error?.message, "error my");
    if (error.code === 11000) {
      if (error.keyPattern.email > 0)
        return NextResponse.json(
          { message: "email already exist", path: "email" },
          { status: 403 }
        );
      if (error.keyPattern.username > 0)
        return NextResponse.json(
          { message: "username already exist", path: "username" },
          { status: 403 }
        );
    }

    return NextResponse.json({ error: "error while registering" });
  }
}
