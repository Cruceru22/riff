/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mbBILO7kKYE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getAllAlbums, getAuthorById } from "~/server/queries";

export async function AlbumComponent() {
  const albums = await getAllAlbums();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {albums.map((album) => (
        <div key={album.id}>
          <Link href={`/album/${album.id}`}>
            <Card className="w-full max-w-sm">
              <CardHeader className="flex flex-col items-center gap-4 p-6">
                <div className="bg-muted flex aspect-square w-20 items-center justify-center rounded-full">
                  <span className="text-4xl">🎸</span>
                </div>
                <div className="space-y-1 text-center">
                  <CardTitle className="text-xl font-semibold">
                    {album.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    yes
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 px-6 pb-6">
                <Button className="w-full">Listen Now</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
