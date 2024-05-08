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
  // await connectDb();
  // await userSchema.deleteMany({});
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <div className="h-screen w-screen overflow-y-auto scrollbar-none">
            <Navbar />

            <main className="w-screen h-screen flex-grow bg-white">
              {children}
              {notemodal}
            </main>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
