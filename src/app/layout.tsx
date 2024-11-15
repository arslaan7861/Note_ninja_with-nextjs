export const metadata = {
  title: "NOTE NINJA",
  description: "",
};
import "./globals.css";
import NextAuthSessionProvider from "@/components/wrapper/authprovider";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import cachedData from "@/lib/cache/data";
// cachedData.initialize();
export default async function RootLayout({
  children,
  notemodal,
}: {
  children: React.ReactNode;
  notemodal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" scrollbar-none overflow-x-hidden w-screen">
        <NextAuthSessionProvider>
          <div className="h-svh w-screen scrollbar-none">
            <Navbar />
            <main className="w-screen relative bg-bg_primary text-text_color pt-16 overflow-y-auto overflow-x-hidden">
              {children}
              {notemodal}
            </main>
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
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
