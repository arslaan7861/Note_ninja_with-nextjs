export const metadata = {
  title: "NOTE NINJA",
  description: "",
};
import "./globals.css";
import NextAuthSessionProvider from "@/components/wrapper/authprovider";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default async function RootLayout({
  children,
  notemodal,
}: {
  children: React.ReactNode;
  notemodal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <div className="h-svh w-screen overflow-y-auto scrollbar-none">
            <Navbar />
            <main className="w-screen h-svh bg-bg_primary text-text_color pt-16">
              {children}
              <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs">
                  &copy; 2024 ClassNotes. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link
                    href="#"
                    className="text-xs hover:underline underline-offset-4"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    className="text-xs hover:underline underline-offset-4"
                  >
                    Terms of Service
                  </Link>
                </nav>
              </footer>
              {notemodal}
            </main>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
