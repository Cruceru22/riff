import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getAllAlbums } from "~/server/queries";
import { AlbumComponent } from "./_components/card";
export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedOut>
        <div className="w-full h-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <AlbumComponent/>
      </SignedIn>
    </main>
  );
}
