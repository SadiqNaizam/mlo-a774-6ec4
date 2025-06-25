import { Play } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
}

interface SongRowProps {
  song: Song;
  index: number;
}

const SongRow = ({ song, index }: SongRowProps) => {
  return (
    <div className="group grid grid-cols-[2rem_1fr_1fr_1fr_4rem] items-center gap-4 px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">
      <div className="text-muted-foreground text-center">
        <span className="group-hover:hidden">{index + 1}</span>
        <button className="hidden group-hover:block text-foreground">
          <Play className="h-4 w-4" fill="currentColor" />
        </button>
      </div>
      <div>
        <p className="font-semibold truncate text-foreground">{song.title}</p>
        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
      </div>
      <p className="text-sm text-muted-foreground truncate">{song.album}</p>
      <p className="text-sm text-muted-foreground truncate">2 days ago</p>
      <p className="text-sm text-muted-foreground justify-self-end">{song.duration}</p>
    </div>
  );
};

export default SongRow;