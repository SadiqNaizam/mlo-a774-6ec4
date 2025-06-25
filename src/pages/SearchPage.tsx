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

// --- Placeholder Data ---\n\nconst genreCategories = [
  { name: 'Fire', color: 'bg-orange-500', href: '#' },
  { name: 'Water', color: 'bg-blue-500', href: '#' },
  { name: 'Grass', color: 'bg-green-500', href: '#' },
  { name: 'Electric', color: 'bg-yellow-400', href: '#' },
  { name: 'Psychic', color: 'bg-pink-500', href: '#' },
  { name: 'Ghost', color: 'bg-purple-600', href: '#' },
  { name: 'Dragon', color: 'bg-indigo-600', href: '#' },
  { name: 'Normal', color: 'bg-gray-400', href: '#' },
];

const searchResults = {
  songs: [
    { id: '1', number: 1, title: 'Lugia\'s Song', artist: 'Lugia', artistId: '1', album: 'The Power of One', albumId: '101', duration: '2:15', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png' },
    { id: '2', number: 2, title: 'Unbeatable', artist: 'Pikachu', artistId: '2', album: 'Master Quest', albumId: '102', duration: '3:04', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
  ],
  artists: [
    { href: '/artist', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png', title: 'Lugia', subtitle: 'Artist', type: 'artist' as 'artist' | 'album', onPlay: () => console.log('Play Lugia') },
  ],
  albums: [
    { href: '/playlist', imageUrl: 'https://cdn.shopify.com/s/files/1/0291/8189/5412/products/41P8249M2KL.jpg?v=1632128036', title: 'Pokémon 2.B.A. Master', subtitle: 'Original Soundtrack', type: 'album' as 'artist' | 'album', onPlay: () => console.log('Play 2.B.A. Master') },
    { href: '/playlist', imageUrl: 'https://m.media-amazon.com/images/I/71pB2HINsUL._SL1200_.jpg', title: 'Pokémon X: 10 Years of Pokémon', subtitle: 'Original Soundtrack', type: 'album' as 'artist' | 'album', onPlay: () => console.log('Play Pokémon X') },
  ],
};

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchQuery, setSearchQuery] = useState('');

  const showResults = searchQuery.length > 0;

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">\n      <LeftSidebar />
      <div className="flex-1 flex flex-col">\n        <div className="sticky top-0 z-10 bg-background/50 backdrop-blur-sm">\n            <Header />\n        </div>
        <ScrollArea className="flex-1">\n          <main className="p-6 space-y-8 pb-32">\n            <div className="relative">\n              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="What do you want to listen to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-sm pl-12 h-12 text-sm bg-muted border-none rounded-full focus:ring-2 focus:ring-ring"\n              />
            </div>

            {showResults ? (
              <div className="space-y-8">\n                {/* Songs Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Songs</h2>
                  <div className="flex flex-col gap-1">\n                    {searchResults.songs.map((track) => (
                      <SongRow key={track.id} track={track} />
                    ))}
                  </div>
                </section>
                
                {/* Artists Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Artists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">\n                    {searchResults.artists.map((artist, index) => (
                      <MediaCard key={index} {...artist} />
                    ))}
                  </div>
                </section>

                {/* Albums Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Albums</h2>
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">\n                    {searchResults.albums.map((album, index) => (
                      <MediaCard key={index} {...album} />
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              // Initial Browse All View
              <section>
                <h2 className="text-2xl font-bold mb-4">Browse all Pokémon Types</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">\n                  {genreCategories.map((genre) => (
                    <Link to={genre.href} key={genre.name}>\n                      <Card className={`aspect-square rounded-lg p-4 flex items-end font-bold text-xl text-white border-none overflow-hidden relative ${genre.color}`}>\n                        <h3>{genre.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>
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