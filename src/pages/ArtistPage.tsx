import React from 'react';
import { Verified } from 'lucide-react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// UI Components
import MediaCard from '@/components/MediaCard';
import SongRow from '@/components/SongRow';
import PlayButtonIcon from '@/components/PlayButtonIcon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder Data
const artist = {
  name: "Pikachu",
  verified: true,
  monthlyListeners: "25M",
  imageUrl: "https://wallpapercave.com/wp/wp7411245.jpg", // Artist banner
};

const popularTracks = [
  { id: '1', number: 1, title: "Thunder Shock", artist: "Pikachu", artistId: "pikachu", album: "Kanto Beats", albumId: "kanto-beats", duration: "3:33", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { id: '2', number: 2, title: "Volt Tackle", artist: "Pikachu", artistId: "pikachu", album: "Sinnoh Sounds", albumId: "sinnoh-sounds", duration: "4:18", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { id: '3', number: 3, title: "Agility", artist: "Pikachu", artistId: "pikachu", album: "Kanto Beats", albumId: "kanto-beats", duration: "4:08", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { id: '4', number: 4, title: "Iron Tail", artist: "Pikachu", artistId: "pikachu", album: "Hoenn Harmonies", albumId: "hoenn-harmonies", duration: "3:26", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { id: '5', number: 5, title: "Nuzzle", artist: "Pikachu", artistId: "pikachu", album: "Alola Albums", albumId: "alola-albums", duration: "3:16", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
];

const albums = [
  { href: "/playlist?id=kanto-beats", imageUrl: "https://cdn.shopify.com/s/files/1/0291/8189/5412/products/41P8249M2KL.jpg?v=1632128036", title: "Kanto Beats", subtitle: "Album • 1998" },
  { href: "/playlist?id=johto-journeys", imageUrl: "https://m.media-amazon.com/images/I/71pB2HINsUL._SL1200_.jpg", title: "Johto Journeys", subtitle: "Album • 2000" },
  { href: "/playlist?id=sinnoh-sounds", imageUrl: "https://i.ebayimg.com/images/g/9yIAAOSwx9NjHqK1/s-l1600.jpg", title: "Sinnoh Sounds", subtitle: "EP • 2007" },
];

const relatedArtists = [
  { href: "/artist?id=jigglypuff", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png", title: "Jigglypuff", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=mewtwo", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png", title: "Mewtwo", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=gengar", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png", title: "Gengar", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=charizard", imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", title: "Charizard", subtitle: "Artist", type: 'artist' as 'artist' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  const handlePlay = () => {
    console.log("Play button clicked on artist page.");
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">\n      <LeftSidebar />
      <div className="flex-1 flex flex-col">\n        <ScrollArea className="flex-1">\n          <main style={{ paddingBottom: '120px' }}>
            {/* Artist Banner */}
            <section
              className="relative flex flex-col justify-between h-96 bg-cover bg-center"\n            >
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${artist.imageUrl})`}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
              <div className="relative z-20"><Header /></div>
              
              <div className="relative z-20 p-8 flex flex-col gap-4">\n                {artist.verified && (
                  <div className="flex items-center gap-2 text-sm font-bold">\n                    <Verified className="h-6 w-6 text-blue-400 fill-current" />
                    Verified Artist
                  </div>
                )}
                <h1 className="text-7xl font-extrabold tracking-tighter">{artist.name}</h1>
                <p className="text-sm font-medium">{artist.monthlyListeners} monthly listeners</p>
              </div>
            </section>

            {/* Controls */}
            <section className="px-8 py-6 flex items-center gap-6 bg-background">\n              <PlayButtonIcon isPlaying={false} onClick={handlePlay} size="large" />
              <Button variant="outline" className="bg-transparent border-muted-foreground/50 hover:border-foreground text-foreground font-bold">\n                Follow
              </Button>
            </section>

            {/* Popular Tracks */}
            <section className="px-8 py-4 bg-background">\n              <h2 className="text-2xl font-bold mb-4">Popular</h2>
              <div className="flex flex-col">\n                {popularTracks.map((track) => (
                  <SongRow key={track.id} track={track} />
                ))}
              </div>
            </section>

            {/* Discography */}
            <section className="px-8 py-4 bg-background">\n              <h2 className="text-2xl font-bold mb-4">Discography</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">\n                {albums.map((album) => (
                  <MediaCard
                    key={album.title}
                    href={album.href}
                    imageUrl={album.imageUrl}
                    title={album.title}
                    subtitle={album.subtitle}
                    type="album"
                    onPlay={() => console.log(`Playing album: ${album.title}`)}
                  />
                ))}
              </div>
            </section>

            {/* Fans Also Like */}
            <section className="px-8 py-4 bg-background">\n              <h2 className="text-2xl font-bold mb-4">Trainers Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">\n                {relatedArtists.map((relArtist) => (
                  <MediaCard
                    key={relArtist.title}
                    href={relArtist.href}
                    imageUrl={relArtist.imageUrl}
                    title={relArtist.title}
                    subtitle={relArtist.subtitle}
                    type={relArtist.type}
                    onPlay={() => console.log(`Playing artist: ${relArtist.title}`)}
                  />
                ))}
              </div>
            </section>

          </main>
        </ScrollArea>
      </div>
      <MusicPlayerBar />
    </div>
  );
};

export default ArtistPage;