// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `riff_${name}`);

export const artists = createTable(
  "artist",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (example) => ({
    artistNameIndex: index("artist_name_idx").on(example.name),
  })
);

export const albums = createTable(
  "album",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }),
    description: varchar("description", { length: 100000 }),
    artistId: integer("artist_id").references(() => artists.id),
  },
  (example) => ({
    albumTitleIndex: index("album_title_idx").on(example.title),
  })
);

export const songs = createTable(
  "song",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }),
    length: varchar("length", { length: 100 }),
    albumId: integer("album_id").references(() => albums.id),
  },
  (example) => ({
    songTitleIndex: index("song_title_idx").on(example.title),
  })
);