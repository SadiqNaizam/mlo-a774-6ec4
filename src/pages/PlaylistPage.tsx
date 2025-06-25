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
  title: "Dorae's Pocket Mix",
  description: 'A collection of futuristic and fun tracks, perfect for any adventure.',
  owner: 'Dorae Fan',
  imageUrl: 'https://i.pinimg.com/736x/8e/0a/47/8e0a4733b4383a8b9a528646b403450e.jpg',
  tracks: [
    { id: 't1', number: 1, title: 'Future Funk', artist: 'The Gadgets', artistId: 'ar1', album: 'Robotic Rhythms', albumId: 'al1', duration: '3:45', imageUrl: 'https://i.scdn.co/image/ab67616d00004851b4388f1b623789b708cf8aab' },
    { id: 't2', number: 2, title: 'Blue Sky Beats', artist: 'Sky High', artistId: 'ar2', album: 'Open Air', albumId: 'al2', duration: '2:55', imageUrl: 'https://i.scdn.co/image/ab67616d00004851a1e3b8a85c8f0f0c0b3c0c1c' },
    { id: 't3', number: 3, title: 'Pocket Full of Sunshine', artist: 'Pop Dynamos', artistId: 'ar3', album: 'Happy Go Lucky', albumId: 'al3', duration: '3:10', imageUrl: 'https://i.scdn.co/image/ab67616d000048518b52c9383b1a5e5e3a8b4b2b' },
    { id: 't4', number: 4, title: 'Time Machine', artist: 'Chrono Drifters', artistId: 'ar4', album: 'Warp Drive', albumId: 'al4', duration: '4:20', imageUrl: 'https://i.scdn.co/image/ab67616d000048513d9f4533b0e7b7f3b8b1b1b1' },
    { id: 't5', number: 5, title: 'Anywhere Door', artist: 'The Gadgets', artistId: 'ar1', album: 'Robotic Rhythms', albumId: 'al1', duration: '3:33', imageUrl: 'https://i.scdn.co/image/ab67616d00004851b4388f1b623789b708cf8aab' },
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
    <div className="relative flex h-screen w-full overflow-hidden bg-black text-white">
      <LeftSidebar />
      <main className="flex-1">
        <ScrollArea className="h-full">
          <div className="pb-24"> {/* Padding for the fixed MusicPlayerBar */}
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm">
                <Header />
            </div>

            {/* Playlist Banner */}
            <section className="flex flex-col md:flex-row items-center md:items-end gap-6 bg-gradient-to-b from-blue-800 to-black/30 p-8 text-white">
              <img
                src={playlistData.imageUrl}
                alt={playlistData.title}
                className="h-48 w-48 md:h-56 md:w-56 object-cover shadow-2xl rounded-md"
              />
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-sm font-bold">PLAYLIST</span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                  {playlistData.title}
                </h1>
                <p className="text-neutral-300 text-sm">{playlistData.description}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">{playlistData.owner}</span>
                  <span className="text-neutral-400"> • {playlistData.tracks.length} songs, {durationString}</span>
                </p>
              </div>
            </section>

            {/* Actions Bar */}
            <div className="flex items-center gap-4 p-8">
              <PlayButtonIcon isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} size="large" />
              <Button variant="ghost" size="icon">
                <Heart className="h-8 w-8 text-neutral-400 hover:text-white" />
                <span className="sr-only">Save to library</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-8 w-8 text-neutral-400 hover:text-white" />
                <span className="sr-only">More options</span>
              </Button>
            </div>

            {/* Track List */}
            <div className="px-8">
              <Table>
                <TableHeader className="border-b border-neutral-800">
                  <TableRow className="text-neutral-400 hover:bg-transparent">
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