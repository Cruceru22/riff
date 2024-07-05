import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import {TopNav} from "./_components/topnav";

export const metadata = {
  title: "Riff",
  description: "Created for an interview",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <div className="grid h-screen grid-rows[auto, 1fr]">
        <TopNav />
        <main>{children}</main>
        </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
