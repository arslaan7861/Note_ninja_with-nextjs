export interface uploadType {
  year: string;
  subject: string;
  uploader: string;
  fileId: string;
  webContentLink: string;
  webViewLink: string;
  _id: string;
  time: string;
  unit: string;
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

export interface userType {
  username: string;
  email: string;
  name: string;
  image?: string;
  id: string;
  completed: boolean;
}
