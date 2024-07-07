import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getAllAlbums } from "~/server/queries";
export const dynamic = "force-dynamic"

async function Albums(){
  const albums = await getAllAlbums()
  return(
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {albums.map((album) => (
        <div key={album.id}>
          <Link href={`/album/${album.id}`}>
            <Button>
              {album.title}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedOut>
        <div className="w-full h-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Albums/>
      </SignedIn>
    </main>
  );
}
