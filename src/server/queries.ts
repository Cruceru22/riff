import {db} from './db'
import { auth } from "@clerk/nextjs/server";
import {albums, songs, artists} from "./db/schema"
import {and, eq} from "drizzle-orm"
import { redirect } from "next/navigation";

export async function getAlbum(id: number){
    const album = await db.query.albums.findFirst({
        where: (model, {eq}) => eq(model.id, id)
})
    if(!album) throw new Error("Album not found!")

    return album
}

export async function getSongsByAlbum(id:number){
    const songs = await db.query.songs.findMany({
        where:(model, {eq}) => eq(model.albumId, id)
    })
    return songs
}

export async function getAlbumByAuthor(id:number){
    const albums = await db.query.albums.findMany({
        where: (model, {eq}) => eq(model.artistId, id)
    })
    return albums
}

export async function getAuthorById(id:number){
    const author = await db.query.artists.findFirst({
        where:(model, {eq}) => eq(model.id, id) 
    })
    return author
}

export async function getAllAlbums() {
    try {
        const allAlbums = await db.query.albums.findMany(); // Query to find all albums

        return allAlbums;
    } catch (error) {
        console.error('Error fetching all albums:', error);
        throw error; // Optionally re-throw or handle as needed
    }
}