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
  likes: number;
  dislikes: number;
  repliesId: string;
  _id: string;
}
