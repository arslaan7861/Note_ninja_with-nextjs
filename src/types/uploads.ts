export interface uploadType {
  year: string;
  subject: string;
  uploader: string;
  fileId: string;
  webContentLink: string;
  webViewLink: string;
  _id: string;
}
export interface commentType {
  comment: string;
  commentator: string;
  likes: string[];
  dislikes: string[];
  repliesId: string;
  _id: string;
  time: number;
}
