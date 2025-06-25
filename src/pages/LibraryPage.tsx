import React from 'react';

// Custom Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import Header from '@/components/layout/Header';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// Custom UI Components
import MediaCard from '@/components/MediaCard';
import SongRow from '@/components/SongRow';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Placeholder data for the library
const placeholderPlaylists = [
  { id: 'pl1', title: 'Chill Mix', subtitle: 'By DoraeTunes', imageUrl: 'https://i.scdn.co/image/ab67706f000000026e57caf773350a4de923528b' },
  { id: 'pl2', title: 'Focus Flow', subtitle: 'By You', imageUrl: 'https://i.scdn.co/image/ab67706f00000002d76d4a45ba10915488ac77a3' },
  { id: 'pl3', title: '80s Rock Anthems', subtitle: 'By You', imageUrl: 'https://i.scdn.co/image/ab67706f000000029380905581974797825ed8a9' },
  { id: 'pl4', title: 'Summer Vibes', subtitle: 'By DoraeTunes', imageUrl: 'https://i.scdn.co/image/ab67706f00000002c118d097a8e8334469b7b96e' },
];

const placeholderAlbums = [
  { id: 'al1', title: 'Starboy', subtitle: 'The Weeknd', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be734e89' },
  { id: 'al2', title: 'AM', subtitle: 'Arctic Monkeys', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45a45d2e29363d2' },
  { id: 'al3', title: 'Currents', subtitle: 'Tame Impala', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79' },
  { id: 'al4', title: 'Random Access Memories', subtitle: 'Daft Punk', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738de3b24871e813f84752b04f' },
  { id: 'al5', title: 'Discovery', subtitle: 'Daft Punk', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a0902d61734f' },
];

const placeholderLikedSongs = [
  { id: 't1', number: 1, title: 'Blinding Lights', artist: 'The Weeknd', artistId: '1', album: 'After Hours', albumId: '1', duration: '3:20', imageUrl: 'https://i.scdn.co/image/ab67616d00004851b2a2634024b42a945b1767ad' },
  { id: 't2', number: 2, title: 'One More Time', artist: 'Daft Punk', artistId: '2', album: 'Discovery', albumId: 'al5', duration: '5:20', imageUrl: 'https://i.scdn.co/image/ab67616d000048513d98a0ae7c78a0902d61734f' },
  { id: 't3', number: 3, title: 'The Less I Know The Better', artist: 'Tame Impala', artistId: '3', album: 'Currents', albumId: 'al3', duration: '3:38', imageUrl: 'https://i.scdn.co/image/ab67616d000048519e1cfc756886ac782e363d79' },
  { id: 't4', number: 4, title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', artistId: '4', album: 'AM', albumId: 'al2', duration: '4:32', imageUrl: 'https://i.scdn.co/image/ab67616d000048514ae1c4c5c45a45d2e29363d2' },
  { id: 't5', number: 5, title: 'Starboy', artist: 'The Weeknd', artistId: '1', album: 'Starboy', albumId: 'al1', duration: '3:50', imageUrl: 'https://i.scdn.co/image/ab67616d000048514718e2b124f79258be734e89' },
];

const LibraryPage: React.FC = () => {
  console.log('LibraryPage loaded');

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <LeftSidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Your Library</h1>
                <Tabs defaultValue="playlists" className="w-full">
                    <TabsList className="bg-neutral-900 mb-4">
                        <TabsTrigger value="playlists" className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white">Playlists</TabsTrigger>
                        <TabsTrigger value="albums" className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white">Albums</TabsTrigger>
                        <TabsTrigger value="liked" className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white">Liked Songs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="playlists">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {placeholderPlaylists.map((playlist) => (
                                <MediaCard 
                                    key={playlist.id}
                                    href={`/playlist?id=${playlist.id}`}
                                    imageUrl={playlist.imageUrl}
                                    title={playlist.title}
                                    subtitle={playlist.subtitle}
                                    type="playlist"
                                    onPlay={() => console.log(`Playing playlist: ${playlist.title}`)}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="albums">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {placeholderAlbums.map((album) => (
                                <MediaCard 
                                    key={album.id}
                                    href={`/playlist?id=${album.id}`}
                                    imageUrl={album.imageUrl}
                                    title={album.title}
                                    subtitle={album.subtitle}
                                    type="album"
                                    onPlay={() => console.log(`Playing album: ${album.title}`)}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="liked">
                        <div className="flex flex-col space-y-1">
                            {placeholderLikedSongs.map((track) => (
                                <SongRow key={track.id} track={track} />
                            ))}
                        </div>
                    </TabsContent>

                </Tabs>
            </div>
            {/* Add padding to the bottom of the scroll area to avoid content being hidden by the player bar */}
            <div className="h-24" /> 
        </ScrollArea>
      </main>
      <MusicPlayerBar />
    </div>
  );
};

export default LibraryPage;