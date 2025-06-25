import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';
import MediaCard from '@/components/MediaCard';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for MediaCards
const recentlyPlayed = [
  {
    href: '/playlist?id=liked-songs',
    imageUrl: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    title: 'Liked Songs',
    subtitle: 'Playlist',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=discover-weekly',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002c4644c33748286982b683b53',
    title: 'Discover Weekly',
    subtitle: 'Playlist • Spotify',
    type: 'playlist' as const,
  },
  {
    href: '/artist?id=the-weeknd',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558172afd3',
    title: 'The Weeknd',
    subtitle: 'Artist',
    type: 'artist' as const,
  },
  {
    href: '/playlist?id=after-hours',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    title: 'After Hours',
    subtitle: 'The Weeknd',
    type: 'album' as const,
  },
];

const featuredPlaylists = [
  {
    href: '/playlist?id=today-top-hits',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002b545d33a768c079f24c8c733',
    title: "Today's Top Hits",
    subtitle: 'DoraeTunes',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=lofi-beats',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
    title: 'Lofi Beats',
    subtitle: 'Chill, study, focus, repeat.',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=rock-classics',
    imageUrl: 'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ec8202818a3',
    title: 'Rock Classics',
    subtitle: 'Rock legends & epic songs that continue to inspire.',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=all-out-80s',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002fa2c1db3d015c13b713b11c3',
    title: 'All Out 80s',
    subtitle: 'The biggest songs of the 1980s.',
    type: 'playlist' as const,
  },
   {
    href: '/playlist?id=rap-caviar',
    imageUrl: 'https://i.scdn.co/image/ab67706f000000026e01a89a5b3c7b8989a081f2',
    title: 'RapCaviar',
    subtitle: 'New music from Drake, Lil Baby and more.',
    type: 'playlist' as const,
  },
];


const HomePage = () => {
  console.log('HomePage loaded');

  const handlePlay = (title: string) => {
    // In a real app, this would trigger the music player context
    console.log(`Playing content from: ${title}`);
  };

  const renderMediaCardSection = (title: string, items: typeof recentlyPlayed) => (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <MediaCard
            key={item.title}
            href={item.href}
            imageUrl={item.imageUrl}
            title={item.title}
            subtitle={item.subtitle}
            type={item.type}
            onPlay={() => handlePlay(item.title)}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="relative flex h-screen overflow-hidden bg-black text-white">
      <LeftSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          {/* Add padding-bottom to prevent content from being hidden by the fixed MusicPlayerBar */}
          <div className="p-6 space-y-8 pb-24">
            {renderMediaCardSection('Recently Played', recentlyPlayed)}
            {renderMediaCardSection('Featured Playlists', featuredPlaylists)}
          </div>
        </ScrollArea>
      </main>

      <MusicPlayerBar />
    </div>
  );
};

export default HomePage;