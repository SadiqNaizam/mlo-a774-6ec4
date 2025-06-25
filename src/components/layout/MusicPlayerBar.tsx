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
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-sidebar border-t border-sidebar-border text-sidebar-foreground p-4 flex items-center justify-between z-50">
      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/4">
        <Avatar className="h-14 w-14 rounded-md">
          <AvatarImage src="https://i.scdn.co/image/ab67616d000048517b9b8b7a7b8b7a7b8b7a7b8b" alt="Album Art" />
          <AvatarFallback>PK</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm truncate">Gotta Catch 'Em All</p>
          <p className="text-xs text-muted-foreground truncate">Pokémon</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground">
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-lg">
          <span className="text-xs text-muted-foreground">1:02</span>
          <Slider
            defaultValue={[33]}
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">3:11</span>
        </div>
      </div>

      {/* Volume and Other Controls */}
      <div className="flex items-center justify-end gap-2 w-1/4">
         <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground">
            <ListMusic className="h-5 w-5" />
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