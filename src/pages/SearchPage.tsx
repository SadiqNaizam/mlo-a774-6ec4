import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

// Custom Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import Header from '@/components/layout/Header';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// Custom UI Components
import MediaCard from '@/components/MediaCard';
import SongRow from '@/components/SongRow';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

// --- Placeholder Data ---\nconst genreCategories = [
  { name: 'Fire', color: 'bg-red-500', href: '#' },
  { name: 'Water', color: 'bg-blue-500', href: '#' },
  { name: 'Grass', color: 'bg-green-500', href: '#' },
  { name: 'Electric', color: 'bg-yellow-400', href: '#' },
  { name: 'Psychic', color: 'bg-pink-500', href: '#' },
  { name: 'Ghost', color: 'bg-purple-600', href: '#' },
  { name: 'Rock', color: 'bg-yellow-700', href: '#' },
  { name: 'Fighting', color: 'bg-orange-700', href: '#' },
  { name: 'Ice', color: 'bg-cyan-300', href: '#' },
  { name: 'Dragon', color: 'bg-indigo-600', href: '#' },
  { name: 'Fairy', color: 'bg-pink-300', href: '#' },
  { name: 'Dark', color: 'bg-gray-800', href: '#' },
];

const searchResults = {
  songs: [
    { id: '1', number: 1, title: 'Jigglypuff\'s Song', artist: 'Jigglypuff', artistId: '1', album: 'Kanto\'s Cutest', albumId: '101', duration: '1:30', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png' },
    { id: '2', number: 2, 'title': '2.B.A. Master', artist: 'Team Rocket', artistId: '2', album: 'Pokémon 2.B.A. Master', albumId: '102', duration: '4:04', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b53f6b3b5f3b5f3b5f3b5f3b' },
  ],
  artists: [
    { href: '/artist', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png', title: 'Jigglypuff', subtitle: 'Artist', type: 'artist' as 'artist' | 'album', onPlay: () => console.log('Play Jigglypuff') },
  ],
  albums: [
    { href: '/playlist', imageUrl: 'https://m.media-amazon.com/images/I/71pI0aZ3bTL._UF1000,1000_QL80_.jpg', title: "Pokémon 2.B.A. Master", subtitle: 'Original Soundtrack', type: 'album' as 'artist' | 'album', onPlay: () => console.log('Play Pokémon 2.B.A. Master') },
  ],
};

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchQuery, setSearchQuery] = useState('');

  const showResults = searchQuery.length > 0;

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
          <main className="p-6 space-y-8 mb-24">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="What do you want to listen to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}\n                className="w-full max-w-sm pl-12 h-12 text-sm bg-muted border-none rounded-full focus:ring-2 focus:ring-ring"\n              />
            </div>

            {showResults ? (
              <div className="space-y-8">
                {/* Songs Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Songs</h2>
                  <div className="flex flex-col gap-1">
                    {searchResults.songs.map((track) => (
                      <SongRow key={track.id} track={track} />
                    ))}
                  </div>
                </section>
                
                {/* Artists Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Artists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {searchResults.artists.map((artist, index) => (
                      <MediaCard key={index} {...artist} />
                    ))}
                  </div>
                </section>

                {/* Albums Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Albums</h2>
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {searchResults.albums.map((album, index) => (
                      <MediaCard key={index} {...album} />
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              // Initial Browse All View
              <section>
                <h2 className="text-2xl font-bold mb-4">Browse all</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {genreCategories.map((genre) => (
                    <Link to={genre.href} key={genre.name}>
                      <Card className={`aspect-square rounded-lg p-4 flex items-end font-bold text-xl border-none overflow-hidden relative ${genre.color}`}>
                        <h3>{genre.name}</h3>
                      </Card>
                    </Link>
                  ))}\n                </div>
              </section>
            )}
          </main>
        </ScrollArea>
      </div>
      <MusicPlayerBar />
    </div>
  );
};

export default SearchPage;