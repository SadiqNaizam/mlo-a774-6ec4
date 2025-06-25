// This is a placeholder page. In a real app, it would fetch and display artist data.
import SongRow from '@/components/SongRow';
import PlayButtonIcon from '@/components/PlayButtonIcon';

const ArtistPage = () => {
    const popularSongs = [
    { id: 1, title: "Battle! (Gym Leader)", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "2:55" },
    { id: 2, title: "Cycling", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "1:40" },
    { id: 3, title: "Pokémon Center Theme", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "1:10" },
    { id: 4, title: "Route 24", artist: "Junichi Masuda", album: "Red & Blue OST", duration: "1:30" },
  ];
  return (
    <div className="space-y-6">
       <div className="flex items-end gap-6">
        <div className="w-48 h-48 bg-muted rounded-full shadow-lg flex-shrink-0">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" alt="Artist" className="w-full h-full object-cover p-4" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Verified Artist</p>
          <h1 className="text-6xl font-bold">Junichi Masuda</h1>
          <p className="text-muted-foreground mt-2">1,234,567 monthly listeners</p>
        </div>
      </div>
       <div className="p-4 bg-transparent flex items-center gap-4">
        <PlayButtonIcon className="opacity-100 h-14 w-14" />
        <button className="px-4 py-1 border rounded-full font-semibold hover:border-foreground">Follow</button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <div className="space-y-1">
          {popularSongs.map((song, index) => (
            <SongRow key={song.id} song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;