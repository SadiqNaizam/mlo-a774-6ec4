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
  { id: 'pl1', title: 'Saffron City Synth', subtitle: 'By PokéTunes', imageUrl: 'https://i.scdn.co/image/ab67706f000000026e57caf773350a4de923528b' },
  { id: 'pl2', title: 'Ilex Forest Focus', subtitle: 'By You', imageUrl: 'https://i.scdn.co/image/ab67706f00000002d76d4a45ba10915488ac77a3' },
  { id: 'pl3', title: 'Elite Four Anthems', subtitle: 'By You', imageUrl: 'https://i.scdn.co/image/ab67706f000000029380905581974797825ed8a9' },
  { id: 'pl4', title: 'Alola Summer', subtitle: 'By PokéTunes', imageUrl: 'https://i.scdn.co/image/ab67706f00000002c118d097a8e8334469b7b96e' },
];

const placeholderAlbums = [
  { id: 'al1', title: 'Red Version', subtitle: 'Pikachu', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be734e89' },
  { id: 'al2', title: 'Blue Version', subtitle: 'Blastoise', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45a45d2e29363d2' },
  { id: 'al3', title: 'Yellow Version', subtitle: 'Pikachu', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79' },
  { id: 'al4', title: 'Diamond', subtitle: 'Dialga', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738de3b24871e813f84752b04f' },
  { id: 'al5', title: 'Pearl', subtitle: 'Palkia', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a0902d61734f' },
];

const placeholderLikedSongs = [
  { id: 't1', number: 1, title: '2.B.A. Master', artist: 'Original Cast', artistId: '1', album: 'Pokémon 2.B.A. Master', albumId: '1', duration: '4:05', imageUrl: 'https://cdn.shopify.com/s/files/1/0291/8189/5412/products/41P8249M2KL.jpg?v=1632128036' },
  { id: 't2', number: 2, title: 'Together Forever', artist: 'Original Cast', artistId: '2', album: 'Pokémon 2.B.A. Master', albumId: 'al5', duration: '3:55', imageUrl: 'https://cdn.shopify.com/s/files/1/0291/8189/5412/products/41P8249M2KL.jpg?v=1632128036' },
  { id: 't3', number: 3, title: 'Pokérap', artist: 'Original Cast', artistId: '3', album: 'Pokémon 2.B.A. Master', albumId: 'al3', duration: '3:38', imageUrl: 'https://cdn.shopify.com/s/files/1/0291/8189/5412/products/41P8249M2KL.jpg?v=1632128036' },
];

const LibraryPage: React.FC = () => {
  console.log('LibraryPage loaded');

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">\n      <LeftSidebar />
      <main className="flex-1 flex flex-col">\n        <div className="sticky top-0 z-10 bg-background/50 backdrop-blur-sm">\n            <Header />\n        </div>
        <ScrollArea className="flex-1">\n            <div className="p-6 pb-32">\n                <h1 className="text-3xl font-bold mb-6">Your Pokédex</h1>
                <Tabs defaultValue="playlists" className="w-full">\n                    <TabsList className="bg-muted mb-4">\n                        <TabsTrigger value="playlists" className="data-[state=active]:bg-card data-[state=active]:text-foreground">Playlists</TabsTrigger>\n                        <TabsTrigger value="albums" className="data-[state=active]:bg-card data-[state=active]:text-foreground">Albums</TabsTrigger>\n                        <TabsTrigger value="liked" className="data-[state=active]:bg-card data-[state=active]:text-foreground">Favorite Pokémon</TabsTrigger>\n                    </TabsList>
                    
                    <TabsContent value="playlists">\n                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">\n                            {placeholderPlaylists.map((playlist) => (
                                <MediaCard 
                                    key={playlist.id}
                                    href={`/playlist?id=${playlist.id}`}\n                                    imageUrl={playlist.imageUrl}
                                    title={playlist.title}
                                    subtitle={playlist.subtitle}
                                    type="playlist"
                                    onPlay={() => console.log(`Playing playlist: ${playlist.title}`)}\n                                />
                            ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="albums">\n                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">\n                            {placeholderAlbums.map((album) => (
                                <MediaCard 
                                    key={album.id}
                                    href={`/playlist?id=${album.id}`}\n                                    imageUrl={album.imageUrl}
                                    title={album.title}
                                    subtitle={album.subtitle}
                                    type="album"
                                    onPlay={() => console.log(`Playing album: ${album.title}`)}\n                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="liked">\n                        <div className="flex flex-col space-y-1">\n                            {placeholderLikedSongs.map((track) => (
                                <SongRow key={track.id} track={track} />
                            ))}
                        </div>
                    </TabsContent>

                </Tabs>
            </div>
        </ScrollArea>
      </main>
      <MusicPlayerBar />
    </div>
  );
};

export default LibraryPage;