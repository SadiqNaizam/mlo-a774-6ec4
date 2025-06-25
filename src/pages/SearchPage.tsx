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

// --- Placeholder Data ---

const genreCategories = [
  { name: 'Pop', color: 'bg-red-500', href: '#' },
  { name: 'Hip-Hop', color: 'bg-yellow-500', href: '#' },
  { name: 'Rock', color: 'bg-green-500', href: '#' },
  { name: 'Electronic', color: 'bg-blue-500', href: '#' },
  { name: 'R&B', color: 'bg-indigo-500', href: '#' },
  { name: 'K-Pop', color: 'bg-pink-500', href: '#' },
  { name: 'Jazz', color: 'bg-purple-500', href: '#' },
  { name: 'Classical', color: 'bg-gray-500', href: '#' },
];

const searchResults = {
  songs: [
    { id: '1', number: 1, title: 'Starlight', artist: 'Muse', artistId: '1', album: 'Black Holes and Revelations', albumId: '101', duration: '3:59', imageUrl: 'https://i.scdn.co/image/ab67616d00001e0281b3a557b6a1e355b2539994' },
    { id: '2', number: 2, title: 'Uprising', artist: 'Muse', artistId: '1', album: 'The Resistance', albumId: '102', duration: '5:04', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e352229443658514a849d443' },
  ],
  artists: [
    { href: '/artist', imageUrl: 'https://i.scdn.co/image/ab67616100005174de540197992a4e40e2b2c159', title: 'Muse', subtitle: 'Artist', type: 'artist' as 'artist' | 'album', onPlay: () => console.log('Play Muse') },
  ],
  albums: [
    { href: '/playlist', imageUrl: 'https://i.scdn.co/image/ab67616d00001e0281b3a557b6a1e355b2539994', title: 'Black Holes and Revelations', subtitle: 'Muse', type: 'album' as 'artist' | 'album', onPlay: () => console.log('Play Black Holes') },
    { href: '/playlist', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e352229443658514a849d443', title: 'The Resistance', subtitle: 'Muse', type: 'album' as 'artist' | 'album', onPlay: () => console.log('Play The Resistance') },
  ],
};

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchQuery, setSearchQuery] = useState('');

  const showResults = searchQuery.length > 0;

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
          <main className="p-6 space-y-8 mb-24">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <Input
                placeholder="What do you want to listen to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-sm pl-12 h-12 text-sm bg-neutral-800 border-none rounded-full focus:ring-2 focus:ring-white/80"
              />
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