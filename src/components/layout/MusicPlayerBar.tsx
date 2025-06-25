import { Play, Pause, SkipBack, SkipForward, Mic2, ListMusic, Laptop2, Volume1, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const MusicPlayerBar = () => {
  const isPlaying = true;
  const volume = 0.75;

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <footer className="absolute bottom-0 left-0 right-0 h-24 bg-card/95 backdrop-blur-sm border-t p-4 flex items-center justify-between">
      <div className="w-1/4 flex items-center gap-4">
        <div className="w-16 h-16 bg-muted rounded-md overflow-hidden">
          <AspectRatio ratio={1 / 1}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div>
          <h4 className="font-semibold truncate">Pokémon Theme</h4>
          <p className="text-sm text-muted-foreground">Jason Paige</p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            {isPlaying ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="h-5 w-5" fill="currentColor" />}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full max-w-xl flex items-center gap-2">
          <span className="text-xs text-muted-foreground">1:02</span>
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <span className="text-xs text-muted-foreground">3:18</span>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-end gap-4">
        <button className="text-muted-foreground hover:text-foreground">
          <Mic2 className="h-5 w-5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground">
          <ListMusic className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 w-32">
          <button className="text-muted-foreground hover:text-foreground">
            <VolumeIcon className="h-5 w-5" />
          </button>
          <Slider defaultValue={[volume * 100]} max={100} step={1} />
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayerBar;