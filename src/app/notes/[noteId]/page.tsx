import React from "react";
type propsType = {
  params: {
    noteId: string;
  };
};
import User from "@/lib/userSchema";
// import connectDb from "@/lib/connectDB";

async function page({ params }: propsType) {
  // await connectDb();
  // const user = await User.create({ Id: params.noteId });
  // console.log(user);

  return (
    <div className="pt-20 flex flex-col items-center gap-2">
      {params.noteId}
    </div>
  );
}

export default page;
