import ModalWrapper from "@/components/wrapper/ModalWrapper";
import React from "react";
type propsType = {
  params: {
    noteId: string;
  };
};

function InterceptedNote({ params }: propsType) {
  const { noteId } = params;

  return (
    <ModalWrapper parentPath="/">
      <>intercepted route for {noteId}</>
    </ModalWrapper>
  );
}

export default InterceptedNote;
