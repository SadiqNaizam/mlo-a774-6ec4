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
    imageUrl: 'https://i.pinimg.com/originals/f3/e1/9f/f3e19f7d549992495610816434495208.png',
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
    href: '/artist?id=team-rocket',
    imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/3/3d/Team_Rocket_trio_OS_2.png',
    title: 'Team Rocket',
    subtitle: 'Artist',
    type: 'artist' as const,
  },
  {
    href: '/playlist?id=veridian-forest',
    imageUrl: 'https://cdn.dribbble.com/users/1723469/screenshots/6591326/image.png',
    title: 'Viridian Forest',
    subtitle: 'Playlist',
    type: 'album' as const,
  },
];

const featuredPlaylists = [
  {
    href: '/playlist?id=today-top-hits',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002b545d33a768c079f24c8c733',
    title: "Today's Top Hits",
    subtitle: 'By PokéTunes',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=lofi-lavender-town',
    imageUrl: 'https://i.ytimg.com/vi/F2iCj0I81GM/maxresdefault.jpg',
    title: 'Lofi Lavender Town',
    subtitle: 'Chill, study, focus, remember your childhood fears.',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=gym-leader-battle',
    imageUrl: 'https://i.ytimg.com/vi/b_28y8-oWv8/maxresdefault.jpg',
    title: 'Gym Leader Battle',
    subtitle: 'Get pumped for your next badge!',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=all-out-90s-pokemon',
    imageUrl: 'https://pbs.twimg.com/media/F3tH6hKa0AA3r-i.jpg',
    title: 'All Out 90s Pokémon',
    subtitle: 'The original Poké-bangers.',
    type: 'playlist' as const,
  },
   {
    href: '/playlist?id=ss-anne-party',
    imageUrl: 'https://i.ytimg.com/vi/dSYu8FL1E4M/maxresdefault.jpg',
    title: 'S.S. Anne Party',
    subtitle: 'Get ready to set sail and party hard.',
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
            key={item.title}\n            href={item.href}\n            imageUrl={item.imageUrl}\n            title={item.title}\n            subtitle={item.subtitle}\n            type={item.type}\n            onPlay={() => handlePlay(item.title)}\n          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="relative flex h-screen overflow-hidden bg-background text-foreground">
      <LeftSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          {/* Add padding-bottom to prevent content from being hidden by the fixed MusicPlayerBar */}
          <div className="p-6 space-y-8 pb-24">
            {renderMediaCardSection('Recently Captured', recentlyPlayed)}
            {renderMediaCardSection('Featured Playlists', featuredPlaylists)}
          </div>
        </ScrollArea>
      </main>

      <MusicPlayerBar />
    </div>
  );
};

export default HomePage;