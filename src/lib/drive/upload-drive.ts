import Fs from "fs";
import { google } from "googleapis";
import path from "path";
import { streamType } from "../server-actions/uploads/upploadNote";

const clientId = process.env.DRIVE_CLIENT_ID;
const clientSecret = process.env.DRIVE_CLIENT_SECRET;
const refreshToken = process.env.DRIVE_REFRESH_TOKEN;
const uri = process.env.DRIVE_REDIRECT_URI;

const oAuthClient = new google.auth.OAuth2(clientId, clientSecret, uri);
oAuthClient.setCredentials({ refresh_token: refreshToken });

const filePath = path.join(__dirname, "bg.jpg");

const drive = google.drive({
  version: "v3",
  auth: oAuthClient,
});

async function Upload(file: string, fileName: string, fileMimeType: string) {
  try {
    // const fileStream = (await file.stream()) as streamType;
    // const buffer = Buffer.from(file);

    // fileStream.pipe = fileStream.pipeTo;
    const res = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: fileMimeType,
      },
      media: {
        mimeType: fileMimeType,
        body: file,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
export default Upload;
