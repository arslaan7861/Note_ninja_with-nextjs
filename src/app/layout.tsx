export const metadata = {
  title: "LEARNING NEXT",
  description: "Generated by Next.js",
};
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ModalWrapper from "@/components/wrapper/ModalWrapper";
const navLink: { href: string; linkName: string }[] = [
  {
    href: "/",
    linkName: "Home",
  },
  {
    href: "/chat",
    linkName: "chat",
  },
  // {
  //   href: "/blog",
  //   linkName: "Blog",
  // },
  // {
  //   href: "/docs",
  //   linkName: "Docs",
  // },
  // {
  //   href: "products",
  //   linkName: "products",
  // },
  // {
  //   href: "profile",
  //   linkName: "Profile",
  // },
  // {
  //   href: "complex-dasshboard",
  //   linkName: "dashboard",
  // },
];

export default function RootLayout({
  children,
  notemodal,
}: {
  children: React.ReactNode;
  notemodal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen overflow-y-auto font-para scrollbar-none">
          <Navbar />
          <main className="w-screen h-screen flex-grow bg-white">
            {children}
            {notemodal}
          </main>
        </div>
      </body>
    </html>
  );
}
