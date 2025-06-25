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
  name: "YOASOBI",
  verified: true,
  monthlyListeners: "21,5M",
  imageUrl: "https://i.scdn.co/image/ab6761610000e5ebba339a9c5f635446c5357833", // Artist image for banner
};

const popularTracks = [
  { id: '1', number: 1, title: "アイドル (Idol)", artist: "YOASOBI", artistId: "yoasobi", album: "Idol", albumId: "idol-album", duration: "3:33", imageUrl: "https://i.scdn.co/image/ab67616d0000b27376750c418073a69986378776" },
  { id: '2', number: 2, title: "夜に駆ける (Yoru ni Kakeru)", artist: "YOASOBI", artistId: "yoasobi", album: "THE BOOK", albumId: "the-book", duration: "4:18", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738a3a647d733525b161f22170" },
  { id: '3', number: 3, title: "群青 (Gunjō)", artist: "YOASOBI", artistId: "yoasobi", album: "THE BOOK", albumId: "the-book", duration: "4:08", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738a3a647d733525b161f22170" },
  { id: '4', number: 4, title: "怪物 (Kaibutsu)", artist: "YOASOBI", artistId: "yoasobi", album: "THE BOOK 2", albumId: "the-book-2", duration: "3:26", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d25093da72a758713589b143" },
  { id: '5', number: 5, title: "祝福 (Shukufuku)", artist: "YOASOBI", artistId: "yoasobi", album: "THE BOOK 2", albumId: "the-book-2", duration: "3:16", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d25093da72a758713589b143" },
];

const albums = [
  { href: "/playlist?id=the-book-2", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d25093da72a758713589b143", title: "THE BOOK 2", subtitle: "Album • 2021" },
  { href: "/playlist?id=the-book", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738a3a647d733525b161f22170", title: "THE BOOK", subtitle: "Album • 2021" },
  { href: "/playlist?id=hajimete-no-ep", imageUrl: "https://i.scdn.co/image/ab67616d0000b2732997b69512353386050d246c", title: "はじめての - EP", subtitle: "EP • 2023" },
];

const relatedArtists = [
  { href: "/artist?id=aimer", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebef916e788e0e64b61a44e59f", title: "Aimer", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=yorushika", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebd8a34a39626b48597f1f0a21", title: "Yorushika", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=zutomayo", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb1d63853177353fec9c39433e", title: "ZUTOMAYO", subtitle: "Artist", type: 'artist' as 'artist' },
  { href: "/artist?id=ado", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb74b09c636fde3d2361623565", title: "Ado", subtitle: "Artist", type: 'artist' as 'artist' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  const handlePlay = () => {
    console.log("Play button clicked on artist page.");
  };

  return (
    <div className="flex h-screen bg-neutral-900 text-white overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
          <main style={{ paddingBottom: '120px' }}>
            {/* Artist Banner */}
            <section
              className="relative flex items-end h-80 bg-cover bg-center p-8"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${artist.imageUrl})` }}
            >
              <div className="flex flex-col gap-4">
                {artist.verified && (
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Verified className="h-6 w-6 text-blue-400 fill-current" />
                    Verified Artist
                  </div>
                )}
                <h1 className="text-7xl font-extrabold tracking-tighter">{artist.name}</h1>
                <p className="text-sm font-medium">{artist.monthlyListeners} monthly listeners</p>
              </div>
            </section>

            {/* Controls */}
            <section className="px-8 py-6 flex items-center gap-6 bg-gradient-to-b from-neutral-900/50 to-neutral-900">
              <PlayButtonIcon isPlaying={false} onClick={handlePlay} size="large" />
              <Button variant="outline" className="bg-transparent border-neutral-500 hover:border-white text-white font-bold">
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
            <section className="px-8 py-4">
              <h2 className="text-2xl font-bold mb-4">Fans Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {relatedArtists.map((relArtist) => (
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