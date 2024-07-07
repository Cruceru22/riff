import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { getAlbum, getAuthorById, getSongsByAlbum } from "~/server/queries";


export async function FullAlbumView(props: { albumId: string }) {
  const idAsNumber = Number(props.albumId);
//   if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo Id");

  const album = await getAlbum(idAsNumber);
  const songs = await getSongsByAlbum(idAsNumber);
  const albumAuthor =  Number(album.artistId)
  const artist = await getAuthorById(albumAuthor)

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-black p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4">{album.title}</h1>
        <p className="text-lg mb-4">{album.description}</p>
        <p className="text-lg mb-4">Artist: {artist?.name}</p>
        <Carousel>
          <CarouselContent>
            {songs.map((song) => (
              <CarouselItem key={song.id}>
                <div className="song-item bg-gray-200 rounded-lg p-4 text-center">
                  <h3 className="text-xl font-bold">{song.title}</h3>
                  <p className="text-lg">Length: {song.length}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 left-4 transform -translate-y-1/2" />
          <CarouselNext className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}
