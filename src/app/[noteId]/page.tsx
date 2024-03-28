import React from "react";
type propsType = {
  params: {
    noteId: string;
  };
};
function page({ params }: propsType) {
  return (
    <div className="pt-20 flex flex-col items-center gap-2">
      {params.noteId}
    </div>
  );
}

export default page;
