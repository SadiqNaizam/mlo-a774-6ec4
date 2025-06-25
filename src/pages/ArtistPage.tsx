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
  name: "Team Rocket",
  verified: true,
  monthlyListeners: "Over 9,000",
  imageUrl: "https://static.wikia.nocookie.net/pokemon/images/3/3d/Team_Rocket_trio_OS_2.png", // Artist image for banner
};

const popularTracks = [
  { id: '1', number: 1, title: "Team Rocket's Rockin'", artist: "Team Rocket", artistId: "tr", album: "Prepare for Trouble", albumId: "tr-album1", duration: "2:22", imageUrl: "https://i.ytimg.com/vi/gzpDKgAlS2I/hqdefault.jpg" },
  { id: '2', number: 2, title: "Double Trouble", artist: "Team Rocket", artistId: "tr", album: "Make it Double", albumId: "tr-album2", duration: "3:01", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b4e9e4f5f5e5e5d5e5e5e5e5" },
  { id: '3', number: 3, title: "We're Blasting Off Again!", artist: "Team Rocket", artistId: "tr", album: "Prepare for Trouble", albumId: "tr-album1", duration: "0:10", imageUrl: "https://i.ytimg.com/vi/gzpDKgAlS2I/hqdefault.jpg" },
  { id: '4', number: 4, title: "Meowth's Song", artist: "Meowth", artistId: "tr", album: "Make it Double", albumId: "tr-album2", duration: "1:45", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b4e9e4f5f5e5e5d5e5e5e5e5" },
  { id: '5', number: 5, title: "The Boss's Daydream", artist: "Team Rocket", artistId: "tr", album: "Prepare for Trouble", albumId: "tr-album1", duration: "4:01", imageUrl: "https://i.ytimg.com/vi/gzpDKgAlS2I/hqdefault.jpg" },
];

const albums = [
  { href: "/playlist?id=prepare-for-trouble", imageUrl: "https://i.ytimg.com/vi/gzpDKgAlS2I/hqdefault.jpg", title: "Prepare for Trouble", subtitle: "Album • 1999" },
  { href: "/playlist?id=make-it-double", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b4e9e4f5f5e5e5d5e5e5e5e5", title: "Make it Double", subtitle: "Album • 2001" },
];

const relatedArtists = [
  { href: "/artist?id=giovanni", imageUrl: "https://archives.bulbagarden.net/media/upload/3/36/The_Birth_of_Mewtwo_Giovanni.png", title: "Giovanni", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=butch-cassidy", imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/f/f6/Butch_and_Cassidy.png/800px-Butch_and_Cassidy.png", title: "Butch & Cassidy", subtitle: "Artist", type: 'artist' as 'artist' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  const handlePlay = () => {
    console.log("Play button clicked on artist page.");
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
          <main style={{ paddingBottom: '120px' }}>
            {/* Artist Banner */}
            <section
              className="relative flex items-end h-80 bg-cover bg-center p-8 bg-black"
              style={{ backgroundImage: `linear-gradient(to top, hsl(var(--background)), transparent), url(${artist.imageUrl})` }}\n            >
              <div className="flex flex-col gap-4">
                {artist.verified && (
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Verified className="h-6 w-6 text-primary fill-current" />
                    Verified Artist
                  </div>
                )}\n                <h1 className="text-7xl font-extrabold tracking-tighter">{artist.name}</h1>
                <p className="text-sm font-medium">{artist.monthlyListeners} monthly listeners</p>
              </div>
            </section>

            {/* Controls */}
            <section className="px-8 py-6 flex items-center gap-6 bg-gradient-to-b from-background/50 to-background">
              <PlayButtonIcon isPlaying={false} onClick={handlePlay} size="large" />
              <Button variant="outline" className="bg-transparent border-muted-foreground hover:border-foreground font-bold">
                Follow
              </Button>
            </section>

            {/* Popular Tracks */}
            <section className="px-8 py-4">
              <h2 className="text-2xl font-bold mb-4">Popular</h2>
              <div className="flex flex-col">
                {popularTracks.map((track) => (
                  <SongRow key={track.id} track={track} />
                ))}
              </div>
            </section>

            {/* Discography */}
            <section className="px-8 py-4">
              <h2 className="text-2xl font-bold mb-4">Discography</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {albums.map((album) => (
                  <MediaCard
                    key={album.title}\n                    href={album.href}\n                    imageUrl={album.imageUrl}\n                    title={album.title}\n                    subtitle={album.subtitle}\n                    type="album"\n                    onPlay={() => console.log(`Playing album: ${album.title}`)}\n                  />
                ))}
              </div>
            </section>

            {/* Fans Also Like */}
            <section className="px-8 py-4">
              <h2 className="text-2xl font-bold mb-4">Fans Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {relatedArtists.map((relArtist) => (
                  <MediaCard
                    key={relArtist.title}\n                    href={relArtist.href}\n                    imageUrl={relArtist.imageUrl}\n                    title={relArtist.title}\n                    subtitle={relArtist.subtitle}\n                    type={relArtist.type}\n                    onPlay={() => console.log(`Playing artist: ${relArtist.title}`)}\n                  />
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