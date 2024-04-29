"use server";
import Fs from "fs";
import uploadToDrive from "@/lib/drive/upload-drive";
import path from "path";
import Upload from "@/lib/drive/upload-drive";
export interface streamType extends ReadableStream<Uint8Array> {
  pipe: (
    destination: WritableStream<Uint8Array>,
    options?: StreamPipeOptions | undefined
  ) => Promise<void>;
}
interface propsType {
  file: Uint8Array;
  // file: Uint8Array | ArrayBuffer | Blob | ReadableStream<Uint8Array>;
  year: string;
  subject: string;
  fileMimeType: string;
  fileName: string;
}
async function uploadNote({ file, fileMimeType, fileName }: propsType) {
  try {
    const buffer = Buffer.from(file);
    // console.log(buffer);
    // const decoder = new TextDecoder();
    // const str = decoder.decode(buffer);
    // console.log(str);
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(buffer);
        controller.close();
      },
    });
    console.log(stream);

    // const stream = await Fs.createReadStream(str);
    // console.log(stream);

    // const file = formData.get("file") as File;
    Upload(stream, fileName, fileMimeType);
    return;
  } catch (error) {
    console.log(error);
  }
}

export default uploadNote;
