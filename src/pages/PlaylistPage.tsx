import { Clock } from 'lucide-react';
import SongRow from '@/components/SongRow';
import PlayButtonIcon from '@/components/PlayButtonIcon';

const PlaylistPage = () => {
  const songs = [
    { id: 1, title: "Pallet Town Theme", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "2:45" },
    { id: 2, title: "Battle! (Wild Pokémon)", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "3:10" },
    { id: 3, title: "Victory! (Wild Pokémon)", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "0:35" },
    { id: 4, title: "Lavender Town Theme", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "3:01" },
    { id: 5, title: "Team Rocket Hideout", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "2:15" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-end gap-6">
        <div className="w-48 h-48 bg-muted rounded-lg shadow-lg flex-shrink-0">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Playlist" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Playlist</p>
          <h1 className="text-6xl font-bold">Kanto Classics</h1>
          <p className="text-muted-foreground mt-2">The original soundtrack for the original journey. 5 songs, 12 min</p>
        </div>
      </div>
      <div className="p-4 bg-transparent">
        <PlayButtonIcon className="opacity-100 h-14 w-14" />
      </div>
      <div>
        <div className="grid grid-cols-[2rem_1fr_1fr_1fr_4rem] items-center gap-4 px-4 py-2 border-b mb-2">
          <p className="text-muted-foreground text-center">#</p>
          <p className="text-muted-foreground">Title</p>
          <p className="text-muted-foreground">Album</p>
          <p className="text-muted-foreground">Date Added</p>
          <div className="text-muted-foreground justify-self-end">
            <Clock className="h-4 w-4" />
          </div>
        </div>
        <div className="space-y-1">
          {songs.map((song, index) => (
            <SongRow key={song.id} song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;