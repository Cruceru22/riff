CREATE TABLE IF NOT EXISTS "riff_album" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"description" varchar(1000),
	"artist_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "riff_artist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "riff_song" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"length" varchar(10),
	"album_id" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "riff_album" ADD CONSTRAINT "riff_album_artist_id_riff_artist_id_fk" FOREIGN KEY ("artist_id") REFERENCES "public"."riff_artist"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "riff_song" ADD CONSTRAINT "riff_song_album_id_riff_album_id_fk" FOREIGN KEY ("album_id") REFERENCES "public"."riff_album"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "album_title_idx" ON "riff_album" ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "artist_name_idx" ON "riff_artist" ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "song_title_idx" ON "riff_song" ("title");