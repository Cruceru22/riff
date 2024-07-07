import { FullAlbumView } from "~/common/album-view";

export default function AlbumModal({
    params: {id: albumId},
}:{
    params: {id:string}
}) {
    return(
        <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
            <FullAlbumView albumId={albumId}/>
      </div>
    )
}