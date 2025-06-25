import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';
import MediaCard from '@/components/MediaCard';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for MediaCards
const recentlyPlayed = [
  {
    href: '/playlist?id=favorite-pokemon',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
    title: 'Favorite Pokémon',
    subtitle: 'Playlist',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=route-1-discoveries',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002c4644c33748286982b683b53',
    title: 'Route 1 Discoveries',
    subtitle: 'Playlist • Prof. Oak',
    type: 'playlist' as const,
  },
  {
    href: '/artist?id=pikachu',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    title: 'Pikachu',
    subtitle: 'Artist',
    type: 'artist' as const,
  },
  {
    href: '/playlist?id=thunder-shock',
    imageUrl: 'https://pbs.twimg.com/media/F9C3o_UWAAAk_s-?format=jpg&name=large',
    title: 'Thunder Shock',
    subtitle: 'Pikachu',
    type: 'album' as const,
  },
];

const featuredPlaylists = [
  {
    href: '/playlist?id=kanto-top-hits',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002b545d33a768c079f24c8c733',
    title: "Kanto's Top Hits",
    subtitle: 'PokéTunes',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=lofi-pallet-town',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
    title: 'Lofi Pallet Town',
    subtitle: 'Chill, battle, focus, repeat.',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=rock-tunnel-riffs',
    imageUrl: 'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ec8202818a3',
    title: 'Rock Tunnel Riffs',
    subtitle: 'Rock-type legends & epic tracks that rock!',
    type: 'playlist' as const,
  },
  {
    href: '/playlist?id=gen-1-gym-battles',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002fa2c1db3d015c13b713b11c3',
    title: 'Gen 1 Gym Battles',
    subtitle: 'The biggest battle themes of Kanto.',
    type: 'playlist' as const,
  },
   {
    href: '/playlist?id=team-rocket-radio',
    imageUrl: 'https://i.scdn.co/image/ab67706f000000026e01a89a5b3c7b8989a081f2',
    title: 'Team Rocket Radio',
    subtitle: 'Prepare for trouble, and make it double.',
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">\n        {items.map((item) => (
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
    <div className="relative flex h-screen overflow-hidden bg-background text-foreground">\n      <LeftSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">\n        <div className="sticky top-0 z-10 bg-background/50 backdrop-blur-sm">\n            <Header />\n        </div>
        <ScrollArea className="flex-1">\n          {/* Add padding-bottom to prevent content from being hidden by the fixed MusicPlayerBar */}
          <div className="p-6 space-y-8 pb-32">\n            {renderMediaCardSection('Good Afternoon', recentlyPlayed)}
            {renderMediaCardSection('PokéTunes Playlists', featuredPlaylists)}
          </div>
        </ScrollArea>
      </main>

      <MusicPlayerBar />
    </div>
  );
};

export default HomePage;