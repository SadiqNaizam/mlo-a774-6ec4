import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  ListMusic,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MusicPlayerBar: React.FC = () => {
  console.log('MusicPlayerBar loaded');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [progress, setProgress] = useState([25]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-[#181818] border-t border-border/20 text-foreground p-4 flex items-center justify-between z-50">\n      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/4">\n        <Avatar className="h-14 w-14 rounded-md">\n          <AvatarImage src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" alt="Album Art" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm truncate">Jigglypuff's Song</p>
          <p className="text-xs text-muted-foreground truncate">Jigglypuff</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2">\n        <div className="flex items-center gap-4">\n          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">\n            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">\n            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary-foreground text-background hover:bg-primary-foreground/90"\n            onClick={() => setIsPlaying(!isPlaying)}
          >\n            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}\n          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">\n            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">\n            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-lg">\n          <span className="text-xs text-muted-foreground">1:05</span>
          <Slider
            defaultValue={[33]}
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">3:15</span>
        </div>
      </div>

      {/* Volume and Other Controls */}
      <div className="flex items-center justify-end gap-2 w-1/4">\n         <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">\n            <ListMusic className="h-5 w-5" />
          </Button>
        <Volume2 className="h-5 w-5 text-muted-foreground" />
        <Slider
          defaultValue={[50]}
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-24"
        />
      </div>
    </footer>
  );
};

export default MusicPlayerBar;