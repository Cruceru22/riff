import { Modal } from "./modal";
import { FullAlbumView } from "~/common/album-view";

export default async function AlbumModal({
    params: {id: albumId}
}:{
    params: {id:string}
}) {
    return(
        <Modal>
            <FullAlbumView albumId={albumId}/>
        </Modal>
    )
}