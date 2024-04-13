import ModalWrapper from "@/components/wrapper/ModalWrapper";
import React from "react";
import User from "@/lib/userSchema";
// import connectDb from "@/lib/connectDB";
type propsType = {
  params: {
    noteId: string;
  };
};

async function InterceptedNote({ params }: propsType) {
  // await connectDb();
  // const user = await User.findOne({ Id: params.noteId });
  // console.log(user.Id);

  return (
    <ModalWrapper>
      <>intercepted {params.noteId}</>
    </ModalWrapper>
  );
}

export default InterceptedNote;
