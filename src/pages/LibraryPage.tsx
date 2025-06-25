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
  { id: 'pl1', title: 'Celadon Game Corner', subtitle: 'By PokéTunes', imageUrl: 'https://i.ytimg.com/vi/B5Qun0d_I7s/maxresdefault.jpg' },
  { id: 'pl2', title: 'Victory Road Mix', subtitle: 'By You', imageUrl: 'https://i.ytimg.com/vi/b_28y8-oWv8/maxresdefault.jpg' },
  { id: 'pl3', title: 'Route 1 Classics', subtitle: 'By You', imageUrl: 'https://i.ytimg.com/vi/qKe2t2_I4e8/maxresdefault.jpg' },
  { id: 'pl4', title: 'Lofi Lavender Town', subtitle: 'By PokéTunes', imageUrl: 'https://i.ytimg.com/vi/F2iCj0I81GM/maxresdefault.jpg' },
];

const placeholderAlbums = [
  { id: 'al1', title: 'Pokémon 2.B.A. Master', subtitle: 'Original Soundtrack', imageUrl: 'https://m.media-amazon.com/images/I/71pI0aZ3bTL._UF1000,1000_QL80_.jpg' },
  { id: 'al2', title: 'Pokémon Red & Blue OST', subtitle: 'Junichi Masuda', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e35a02ca8b43f9a9c7b4f5db' },
  { id: 'al3', title: 'Pokémon Gold & Silver OST', subtitle: 'Junichi Masuda', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734138676d3e89b4f9c5b6c86a' },
  { id: 'al4', title: 'Prepare for Trouble', subtitle: 'Team Rocket', imageUrl: 'https://i.ytimg.com/vi/gzpDKgAlS2I/hqdefault.jpg' },
];

const placeholderLikedSongs = [
  { id: 't1', number: 1, title: 'Pokémon Theme', artist: 'Jason Paige', artistId: '1', album: '2.B.A. Master', albumId: 'al1', duration: '3:18', imageUrl: 'https://m.media-amazon.com/images/I/71pI0aZ3bTL._UF1000,1000_QL80_.jpg' },
  { id: 't2', number: 2, title: 'Double Trouble', artist: 'Team Rocket', artistId: '2', album: 'Make It Double', albumId: 'al4', duration: '3:01', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b4e9e4f5f5e5e5d5e5e5e5e5' },
  { id: 't3', number: 3, title: 'Battle! (Gym Leader)', artist: 'Junichi Masuda', artistId: '3', album: 'Red & Blue OST', albumId: 'al2', duration: '2:50', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e35a02ca8b43f9a9c7b4f5db' },
  { id: 't4', number: 4, title: 'Lavender Town', artist: 'Junichi Masuda', artistId: '3', album: 'Red & Blue OST', albumId: 'al2', duration: '3:02', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e35a02ca8b43f9a9c7b4f5db' },
  { id: 't5', number: 5, title: 'Pokérap', artist: 'James "D-Train" Williams', artistId: '4', album: '2.B.A. Master', albumId: 'al1', duration: '3:05', imageUrl: 'https://m.media-amazon.com/images/I/71pI0aZ3bTL._UF1000,1000_QL80_.jpg' },
];

const LibraryPage: React.FC = () => {
  console.log('LibraryPage loaded');

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <LeftSidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Your Pokédex</h1>
                <Tabs defaultValue="playlists" className="w-full">
                    <TabsList className="bg-card mb-4">
                        <TabsTrigger value="playlists" className="data-[state=active]:bg-muted data-[state=active]:text-foreground">Playlists</TabsTrigger>
                        <TabsTrigger value="albums" className="data-[state=active]:bg-muted data-[state=active]:text-foreground">Albums</TabsTrigger>
                        <TabsTrigger value="liked" className="data-[state=active]:bg-muted data-[state=active]:text-foreground">Liked Songs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="playlists">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {placeholderPlaylists.map((playlist) => (
                                <MediaCard 
                                    key={playlist.id}\n                                    href={`/playlist?id=${playlist.id}`}\n                                    imageUrl={playlist.imageUrl}\n                                    title={playlist.title}\n                                    subtitle={playlist.subtitle}\n                                    type="playlist"\n                                    onPlay={() => console.log(`Playing playlist: ${playlist.title}`)}\n                                />
                            ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="albums">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {placeholderAlbums.map((album) => (
                                <MediaCard 
                                    key={album.id}\n                                    href={`/playlist?id=${album.id}`}\n                                    imageUrl={album.imageUrl}\n                                    title={album.title}\n                                    subtitle={album.subtitle}\n                                    type="album"\n                                    onPlay={() => console.log(`Playing album: ${album.title}`)}\n                                />
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