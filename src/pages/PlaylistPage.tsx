import React, { useState } from 'react';

// Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import Header from '@/components/layout/Header';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// Custom Components
import SongRow from '@/components/SongRow';
import PlayButtonIcon from '@/components/PlayButtonIcon';

// shadcn/ui Components
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";

// Icons
import { Clock, Heart, MoreHorizontal } from 'lucide-react';

// Placeholder Data for the Playlist Page
const playlistData = {
  id: 'pl1',
  title: "Trainer's Victory Road Mix",
  description: 'A collection of epic tracks for the journey to the Pokémon League.',
  owner: 'Trainer Red',
  imageUrl: 'https://i.pinimg.com/originals/a7/32/31/a732314a3812444d4838027b3e09438c.jpg',
  tracks: [
    { id: 't1', number: 1, title: 'Cerulean Cape', artist: 'The Water Sprites', artistId: 'ar1', album: 'Kanto Waves', albumId: 'al1', duration: '3:45', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
    { id: 't2', number: 2, title: 'Pallet Town Theme', artist: 'Homecoming', artistId: 'ar2', album: 'Kanto Journeys', albumId: 'al2', duration: '2:55', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
    { id: 't3', number: 3, title: "Pikachu's Jukebox", artist: 'Pikachu', artistId: 'ar3', album: 'Electric Grooves', albumId: 'al3', duration: '3:10', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
    { id: 't4', number: 4, title: "Dialga's Roar", artist: 'Chrono Drifters', artistId: 'ar4', album: 'Temporal Beats', albumId: 'al4', duration: '4:20', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png' },
    { id: 't5', number: 5, title: "Abra's Teleport", artist: 'The Psychics', artistId: 'ar1', album: 'Mind Over Matter', albumId: 'al1', duration: '3:33', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png' },
  ]
};

const PlaylistPage = () => {
  console.log('PlaylistPage loaded');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState('t3'); // Example: one song is already playing

  const totalDuration = playlistData.tracks.reduce((acc, track) => {
    const [minutes, seconds] = track.duration.split(':').map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);
  const totalMinutes = Math.floor(totalDuration / 60);

  const durationString = `about ${totalMinutes} min`;

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background text-foreground">\n      <LeftSidebar />
      <main className="flex-1">\n        <ScrollArea className="h-full">\n          <div className="pb-32"> {/* Padding for the fixed MusicPlayerBar */}
            {/* Playlist Banner */}
            <section className="relative flex flex-col md:flex-row items-center md:items-end gap-6 bg-gradient-to-b from-primary/30 via-primary/10 to-background/10 p-8 text-foreground">\n              <Header />
              <img
                src={playlistData.imageUrl}
                alt={playlistData.title}
                className="h-48 w-48 md:h-56 md:w-56 object-cover shadow-2xl rounded-md"
              />
              <div className="flex flex-col gap-3 text-center md:text-left">\n                <span className="text-sm font-bold">PLAYLIST</span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">\n                  {playlistData.title}
                </h1>
                <p className="text-muted-foreground text-sm">{playlistData.description}</p>
                <p className="text-sm mt-2">\n                  <span className="font-semibold">{playlistData.owner}</span>
                  <span className="text-muted-foreground"> • {playlistData.tracks.length} songs, {durationString}</span>
                </p>
              </div>
            </section>

            {/* Actions Bar */}
            <div className="flex items-center gap-4 p-8 bg-gradient-to-b from-background/10 to-background">\n              <PlayButtonIcon isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} size="large" />
              <Button variant="ghost" size="icon">\n                <Heart className="h-8 w-8 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Save to library</span>
              </Button>
              <Button variant="ghost" size="icon">\n                <MoreHorizontal className="h-8 w-8 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">More options</span>
              </Button>
            </div>

            {/* Track List */}
            <div className="px-8">\n              <Table>\n                <TableHeader className="border-b border-border/50">\n                  <TableRow className="text-muted-foreground hover:bg-transparent">\n                    <TableHead className="w-16 text-center">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Album</TableHead>
                    <TableHead className="hidden md:table-cell">Date Added</TableHead>
                    <TableHead className="text-right"><Clock className="h-4 w-4 inline-block" /></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border-none">\n                  {playlistData.tracks.map((track, index) => (
                    <SongRow 
                      key={track.id} 
                      track={{ ...track, number: index + 1 }} 
                      isPlaying={currentlyPlayingId === track.id}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </ScrollArea>
      </main>
      <MusicPlayerBar />
    </div>
  );
};

export default PlaylistPage;