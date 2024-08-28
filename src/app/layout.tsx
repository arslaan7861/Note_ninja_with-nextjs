export const metadata = {
  title: "NOTE NINJA",
  description: "",
};
import "./globals.css";
import NextAuthSessionProvider from "@/components/wrapper/authprovider";
import Navbar from "@/components/navbar/Navbar";

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

            <main className="w-screen h-svh bg-bg_primary text-text_color">
              {children}
              {notemodal}
            </main>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
