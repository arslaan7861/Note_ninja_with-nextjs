import { Profile, Session } from "next-auth";

declare module "next-auth" {
  interface User {
    _id: string;
  }
  interface Profile {
    id: string;
    avatar_url: string;
    login: string;
    name: string;
    username: string;
    picture: string;
  }
  interface Session {
    user: { username: string; email: string; name: string; image; id: string };
  }
  interface Token {
    provider: string;
    id: string;
  }
}
