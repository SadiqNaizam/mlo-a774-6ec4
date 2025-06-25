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
  title: "Professor Oak's Mix",
  description: 'A collection of essential tracks for any Pokémon journey.',
  owner: 'Prof. Oak',
  imageUrl: 'https://archives.bulbagarden.net/media/upload/thumb/1/15/Professor_Oak_LGPE.png/200px-Professor_Oak_LGPE.png',
  tracks: [
    { id: 't1', number: 1, title: 'Pokémon Theme', artist: 'Jason Paige', artistId: 'ar1', album: 'Pokémon 2.B.A. Master', albumId: 'al1', duration: '3:18', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b53f6b3b5f3b5f3b5f3b5f3b' },
    { id: 't2', number: 2, title: 'Viridian City', artist: 'Junichi Masuda', artistId: 'ar2', album: 'Pokémon R/B/Y Soundtrack', albumId: 'al2', duration: '2:15', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e35a02ca8b43f9a9c7b4f5db' },
    { id: 't3', number: 3, title: 'Team Rocket\'s Motto', artist: 'Team Rocket', artistId: 'ar3', album: 'Pokémon 2.B.A. Master', albumId: 'al1', duration: '1:30', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b53f6b3b5f3b5f3b5f3b5f3b' },
    { id: 't4', number: 4, title: 'Battle! (Wild Pokémon)', artist: 'Junichi Masuda', artistId: 'ar2', album: 'Pokémon R/B/Y Soundtrack', albumId: 'al2', duration: '2:45', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e35a02ca8b43f9a9c7b4f5db' },
    { id: 't5', number: 5, title: 'Pokérap', artist: 'James "D-Train" Williams', artistId: 'ar4', album: 'Pokémon 2.B.A. Master', albumId: 'al1', duration: '3:05', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b53f6b3b5f3b5f3b5f3b5f3b' },
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
    <div className="relative flex h-screen w-full overflow-hidden bg-background text-foreground">
      <LeftSidebar />
      <main className="flex-1">
        <ScrollArea className="h-full">
          <div className="pb-24"> {/* Padding for the fixed MusicPlayerBar */}
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-background/50 backdrop-blur-sm">
                <Header />
            </div>

            {/* Playlist Banner */}
            <section className="flex flex-col md:flex-row items-center md:items-end gap-6 bg-gradient-to-b from-primary/30 to-background/30 p-8">
              <img
                src={playlistData.imageUrl}
                alt={playlistData.title}
                className="h-48 w-48 md:h-56 md:w-56 object-cover shadow-2xl rounded-md bg-card"
              />
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-sm font-bold">PLAYLIST</span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                  {playlistData.title}
                </h1>
                <p className="text-muted-foreground text-sm">{playlistData.description}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">{playlistData.owner}</span>
                  <span className="text-muted-foreground"> • {playlistData.tracks.length} songs, {durationString}</span>
                </p>
              </div>
            </section>

            {/* Actions Bar */}
            <div className="flex items-center gap-4 p-8">
              <PlayButtonIcon isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} size="large" />
              <Button variant="ghost" size="icon">
                <Heart className="h-8 w-8 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Save to library</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-8 w-8 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">More options</span>
              </Button>
            </div>

            {/* Track List */}
            <div className="px-8">
              <Table>
                <TableHeader className="border-b border-border">
                  <TableRow className="text-muted-foreground hover:bg-transparent">
                    <TableHead className="w-16 text-center">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Album</TableHead>
                    <TableHead className="hidden md:table-cell">Date Added</TableHead>
                    <TableHead className="text-right"><Clock className="h-4 w-4 inline-block" /></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border-none">
                  {playlistData.tracks.map((track, index) => (
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