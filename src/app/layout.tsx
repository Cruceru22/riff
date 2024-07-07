import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { TopNav } from "./_components/topnav";

export const metadata = {
  title: "Riff",
  description: "Created for an interview",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="grid-rows[auto, 1fr] grid h-screen">
            <TopNav />
            <main>{children}</main>
            {modal}
          </div>
          <div id="modal-root"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
