"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

function NextAuthSessionProvider({
  children,
}: {
  children: React.JSX.Element;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthSessionProvider;
